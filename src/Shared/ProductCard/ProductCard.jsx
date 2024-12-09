import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

  return (
    <div className="cursor-pointer">
      <Link to={`/productDetails/${_id}`}>
        <div className=" hover:bg-[#eefff3] transition duration-300 hover:scale-105 hover:border-green-300 hover:border-2 shadow-2xl">
          {/* Card Image */}
          <figure className="">
            <img
              src={food_img}
              alt="food_image"
              className="rounded-lg w-full xl:h-[300px] md:h-[220px] h-[280px]"
            />
          </figure>

          <div className="font-semibold p-4">
            {/* Cards Info */}
            <div className="text-lg">
              <h2 className="text-2xl font-semibold merienda text-center mb-2">
                {food_name}
              </h2>
            </div>

            <div className="flex justify-between  mt-4">
              <div>
                <p className="text-lg font-semibold text-green-700 ">
                  TK {price}
                </p>
                <p className="text-gray-400 text-xs">{purchase_count} sales</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center mt-2">
                <Link to={`/foodDetails/${_id}`}>
                  <button className="btn btn-outline btn-sm transition duration-500 hover:bg-green-600 font-extrabold text-[#27a373] merienda rounded-none">
                    Quick Add
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  card: PropTypes.object,
};
