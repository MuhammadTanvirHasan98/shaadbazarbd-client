import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { LuView } from "react-icons/lu";
import { CiSquareRemove } from "react-icons/ci";
import { removeFromWish } from "../../Redux/Features/Wishlist/wishSlice";

export default function Wishlist() {
  const wishItems = useSelector((state) => state.wish.wish);

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="bg-green-400 text-white space-y-4 py-6">
        <p className=" text-center text-4xl">Wishlist</p>
        <p className="text-center text-xl">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          {"  > "}
          Your Wishlist
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {wishItems.length === 0 ? (
          <p className="text-green-500 text-center text-3xl font-semibold mt-10">
            Your wishlist is <span className="text-red-600"> empty!</span>{" "}
          </p>
        ) : (
          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 font-normal">Product Image</th>
                  <th className="text-left py-4 font-normal">Product Name</th>
                  <th className="text-left py-4 font-normal">Price</th>
                  <th className="text-right py-4 font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishItems.map((item, indx) => (
                  <tr key={indx} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item?.food_img}
                          alt="Black Garlic"
                          className="w-20 h-20 object-cover rounded"
                        />
                      </div>
                    </td>
                    <td className="py-4">
                      <div>
                        <h3 className="font-medium">{item?.food_name}</h3>
                      </div>
                    </td>
                    <td className="py-4">
                      <div>
                        <h3 className="font-medium">{item?.price}</h3>
                      </div>
                    </td>

                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-4 items-center">
                        <Link to={`/productDetails/${item._id}`}>
                          <LuView className="text-2xl text-green-500" />
                        </Link>

                        <CiSquareRemove
                          className="cursor-pointer text-3xl text-red-500"
                          onClick={() => {
                            dispatch(removeFromWish(item._id));
                            toast.success(
                              "Your item has been removed from wishlist!"
                            );
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
