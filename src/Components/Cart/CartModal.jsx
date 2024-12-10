import PropTypes from "prop-types";
import { RiInformation2Line } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
import { PiCalculatorLight } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

const PlaceOrderModal = ({
  handlePlaceOrder,
  handleClose,
  subtotal,
  cartItems,
}) => {
  const { user } = useAuth();

  console.log({ subtotal, cartItems });

  // const { rating, likes, title } = mealInfo;

  return (
    <div>
      <div>
        <dialog id="cart_modal" className="modal">
          <div className="modal-box p-8">
            <div className="mb-2 border-2 p-4 rounded-2xl rounded-b-none bg-slate-100">
              {/* Meal info */}
              <div className="font-semibold">
                <p className="text-2xl flex items-center gap-1">
                  <RiInformation2Line />
                  Food Order Info:
                </p>

                <div className="border-b-2 pb-2">
                  {cartItems.map((item, indx) => (
                    <ul key={indx} className="text-left ml-3">
                      {indx + 1}. {item?.food_name}{" "}
                      {`( ${item?.price} x ${item?.quantity} ) = ${
                        item?.price * item?.quantity
                      }`}
                    </ul>
                  ))}
                </div>

                <p className="flex justify-between items-center gap-1 mt-2">
                  {" "}
                  <p className="flex items-center gap-1">
                    <PiCalculatorLight />
                    Subtotal:{" "}
                  </p>
                  <span className="text-green-600">TK {subtotal}</span>{" "}
                </p>

                <p className="flex justify-between items-center gap-1 border-b-2 pb-2">
                  {" "}
                  <p className="flex items-center gap-1">
                    <TbTruckDelivery />
                    Delivery Charge:
                  </p>
                  <span className="text-green-600">TK 120</span>{" "}
                </p>

                <p className="flex justify-between items-center gap-1 mt-2">
                  {" "}
                  <p className="flex items-center gap-1">
                    <PiCalculatorLight />
                    Total:{" "}
                  </p>
                  <span className="text-green-600">
                    {" "}
                    TK {subtotal + 120}
                  </span>{" "}
                </p>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  disabled={true}
                  name="name"
                  className="input input-bordered  font-semibold"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  type="text"
                  value={user?.email}
                  disabled={true}
                  name="name"
                  className="input input-bordered font-semibold"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="number"
                  className="input input-bordered font-semibold"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Enter Your Address
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  name="review"
                  placeholder="Give your full address within 85 characters."
                  required
                ></textarea>
              </div>
              <div type="submit" className="form-control mt-6">
                <button className="btn btn-outline text-green-500 hover:bg-green-600  text-lg font-bold rounded-t-none">
                  Place Order
                </button>
              </div>
            </form>
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default PlaceOrderModal;

PlaceOrderModal.propTypes = {
  mealInfo: PropTypes.object,
  handleReviewSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};
