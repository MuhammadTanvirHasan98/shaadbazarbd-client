import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeAllProduct,
  removeProduct,
} from "../../Redux/Features/Cart/cartSlice";
import PlaceOrderModal from "./CartModal";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  console.log("Cart Items:", cartItems);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const orderInfo = {
      name,
      email,
      phone,
      address,
      order: cartItems,
      status: "Pending",
      subtotal,
    };

    if (address.length > 70) return toast.error("Your character limit exceeds");

    try {
      const { data } = await axiosPublic.post("/placeOrder", orderInfo);
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Your order has been placed successfully!",
          icon: "success",
        });
        document.getElementById("cart_modal").close();
        dispatch(removeAllProduct());
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleClose = () => {
    document.getElementById("cart_modal").close();
  };

  return (
    <div className="">
      <div className="bg-green-400 text-white space-y-4 py-6">
        <p className=" text-center text-4xl">Shopping cart</p>
        <p className="text-center text-xl">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          {"  > "}
          Your Shopping cart
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {cartItems.length === 0 ? (
          <p className="text-green-500 text-center text-3xl font-semibold mt-10">
            Your cart is <span className="text-red-600"> empty!</span>{" "}
          </p>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] ">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 font-normal ">Product</th>
                    <th className="text-left py-4 font-normal">Price</th>
                    <th className="text-left pl-6 py-4 font-normal">
                      Quantity
                    </th>
                    <th className="text-right py-4 font-normal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item?.product_img}
                            alt="Black Garlic"
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-medium">
                              {item?.product_name}
                            </h3>
                            <button
                              onClick={() => dispatch(removeProduct(item?._id))}
                              className="text-gray-500 text-sm mt-1 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">Tk {item?.price}</td>
                      <td className="py-4">
                        <div className="flex items-center border rounded max-w-[120px]">
                          <button
                            onClick={() =>
                              dispatch(decreaseQuantity(item?._id))
                            }
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item?.quantity}
                            className="w-12 text-center border-x py-1"
                            readOnly
                          />
                          <button
                            onClick={() =>
                              dispatch(increaseQuantity(item?._id))
                            }
                            className="px-3 py-1.5 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        Tk {item?.price * item?.quantity}.00
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 text-right">
              <p>Subtotal: {subtotal}</p>

              <button
                onClick={() =>
                  document.getElementById("cart_modal").showModal()
                }
                className="bg-green-500 p-2 mt-5 rounded-md animate-bounce font-semibold text-white"
              >
                Place your order with cash on delivery
              </button>
              <PlaceOrderModal
                handlePlaceOrder={handlePlaceOrder}
                handleClose={handleClose}
                subtotal={subtotal}
                cartItems={cartItems}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
