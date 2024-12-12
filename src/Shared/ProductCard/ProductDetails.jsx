import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Features/Cart/cartSlice";
import { addToWish } from "../../Redux/Features/Wishlist/wishSlice";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const productInfo = useLoaderData();
  console.log(productInfo);

  const { user } = useAuth();
  const dispatch = useDispatch();

  const {
    _id,
    product_name,
    product_img,
    price,
    stock,
    category,
    origin,

    description,
  } = productInfo;

  return (
    <div className="w-[90%] mx-auto my-16">
      <h1 className="text-center md:text-5xl text-3xl  font-bold text-orange-500 merienda mb-10">
        Food details
      </h1>
      <div className="xl:w-[70%] md:w-[80%] mx-auto flex flex-col lg:flex-row  border-2 border-orange-200 rounded-xl shadow-2xl bg-gradient-to-br">
        {/* craft image  */}
        <div className="lg:w-1/2 w-full p-4 lg:pb-4 lg:pr-0 pb-0">
          <img
            src={product_img}
            className="w-full lg:h-full md:h-[500px] h-[350px] lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl"
          />
        </div>

        {/* Craft Info */}
        <div className="xl:text-2xl lg:w-1/2 w-full lg:p-10 md:p-7 p-5 text-[#385398]">
          <h1 className="lg:text-3xl lg:text-left text-center text-2xl mb-2 font-bold merienda">
            {product_name}
          </h1>

          <h2 className="xl:text-2xl text-lg lg:text-left text-center">
            Category: <span className="font-bold">{category}</span>
          </h2>

          <hr className="border-orange-100 md:my-2 my-1 " />

          <div className="flex justify-between">
            <p className="flex items-center gap-1 xl:text-2xl text-lg">
              Available Quantity:{" "}
              <span className="font-semibold">{stock} </span>
            </p>
          </div>

          <hr className="border-orange-100 md:my-2 my-1 " />

          <div className="flex justify-between">
            <p className="flex items-center font-normal gap-1 text-2xl">
              $ {price}
            </p>
            <p className="flex items-center  gap-1  xl:text-2xl text-lg">
              Origin: <span className="font-bold">{origin}</span>
            </p>
          </div>

          <hr className="border-orange-100 md:my-2 my-1 " />

          {/* Review */}
          <p>
            Description:{" "}
            <span className="text-pretty font-semibold">{description} </span>
          </p>

          {/* Action buttons */}
          <div className="flex justify-between  mt-4">
            {/* Add to Cart Button */}

            {user ? (
              <button
                onClick={() => {
                  dispatch(
                    addToWish({ _id, product_name, product_img, price })
                  );
                  toast.success(`${product_name} is added to the wishlist!`);
                }}
                className="btn btn-outline btn-sm transition duration-500 hover:bg-green-600 font-extrabold text-[#27a373] merienda rounded-none"
              >
                Add Wish
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline btn-sm transition duration-500 hover:bg-green-600 font-extrabold text-[#27a373] merienda rounded-none">
                  Add Wish
                </button>
              </Link>
            )}

            {user ? (
              <button
                onClick={() => {
                  dispatch(
                    addProduct({
                      _id,
                      product_name,
                      product_img,
                      price,
                    })
                  );
                  toast.success(`${product_name} is added to the cart!`);
                }}
                className="btn btn-outline btn-sm transition duration-500 hover:bg-green-600 font-extrabold text-[#27a373] merienda rounded-none"
              >
                Quick Add
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline btn-sm transition duration-500 hover:bg-green-600 font-extrabold text-[#27a373] merienda rounded-none">
                  Quick Add
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
