import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../Redux/Features/Cart/cartSlice";
import { addToWish } from "../../Redux/Features/Wishlist/wishSlice";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const ProductCard = ({ card }) => {
  const {
    _id,
    food_name,
    food_img,
    category,
    purchase_count,
    price,
    quantity,
  } = card;

  const { user } = useAuth();

  const dispatch = useDispatch();

  return (
    <div className="cursor-pointer">
      <div className=" hover:bg-[#eefff3] transition duration-300 hover:scale-105 hover:border-green-300 hover:border-2 shadow-2xl">
        {/* Card Image */}
        <Link to={`/productDetails/${_id}`}>
          <figure className="">
            <img
              src={food_img}
              alt="food_image"
              className="rounded-lg w-full xl:h-[300px] md:h-[220px] h-[280px]"
            />
          </figure>
        </Link>

        <div className="font-semibold p-4">
          {/* Cards Info */}
          <div className="text-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold merienda text-center mb-2">
              {food_name}
            </h2>
            <p className="text-center">{category}</p>
            <div>
              <p className="text-lg font-semibold text-green-700 ">
                TK {price}
              </p>
              <p className="text-gray-400 text-xs">{purchase_count} sales</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-between  mt-4">
            {/* Add to Cart Button */}

            {user ? (
              <button
                onClick={() => {
                  dispatch(addToWish({ _id, food_name, food_img, price }));
                  toast.success(`${food_name} is added to the wishlist!`);
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
                  dispatch(addProduct({ _id, food_name, food_img, price }));
                  toast.success(`${food_name} is added to the cart!`);
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

export default ProductCard;

ProductCard.propTypes = {
  card: PropTypes.object,
};
