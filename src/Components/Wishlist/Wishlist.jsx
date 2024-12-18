import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { LuView } from "react-icons/lu";
import { CiSquareRemove } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWish } from "../../Redux/Features/Wishlist/wishSlice";

export default function Wishlist() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: wishItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishItems"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishProducts/${user?.email}`);
      if (res.status === 204) {
        return [];
      }
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log(wishItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) dispatch(setWish(wishItems));
  }, [wishItems, isLoading]);

  const handleDeleteWish = async (id) => {
    console.log(id);

    const { data } = await axiosPublic.delete(`wish/${id}`);

    if (data.deletedCount == 1) {
      toast.success("Your item has been removed from wishlist!");
      refetch();
    }
  };

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

      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
                    <th className="text-left py-4 font-normal">
                      Product Image
                    </th>
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
                            src={item?.product_img}
                            alt="Black Garlic"
                            className="w-20 h-20 object-cover rounded"
                          />
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <h3 className="font-medium">{item?.product_name}</h3>
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <h3 className="font-medium">{item?.price}</h3>
                        </div>
                      </td>

                      <td className="py-4 text-right">
                        <div className="flex justify-end gap-4 items-center">
                          <Link to={`/productDetails/${item.product_id}`}>
                            <LuView className="text-2xl text-green-500" />
                          </Link>

                          <CiSquareRemove
                            className="cursor-pointer text-3xl text-red-500"
                            onClick={() => handleDeleteWish(item?._id)}
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
      )}
    </div>
  );
}
