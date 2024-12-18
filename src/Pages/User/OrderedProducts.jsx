import { Link } from "react-router-dom";
import { LuView } from "react-icons/lu";
import { CiSquareRemove } from "react-icons/ci";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function OrderedProducts() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: orderedItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orderedProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/orders/${user?.email}`);
      if (res.status === 204) {
        return [];
      }
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log("Ordered Items", orderedItems);

  const mergedOrderItems = orderedItems.flatMap((item) => item.order);
  console.log("Merge", mergedOrderItems);

  return (
    <div className="">
      <div className="bg-green-400 text-white space-y-4 py-6">
        <p className=" text-center text-4xl">Ordered Products</p>
        <p className="text-center text-xl">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          {"  > "}
          Your Ordered Products
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {mergedOrderItems.length === 0 ? (
          <p className="text-green-500 text-center text-3xl font-semibold mt-10">
            Your list is <span className="text-red-600"> empty!</span>{" "}
          </p>
        ) : (
          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 font-normal">Product Image</th>
                  <th className="text-left py-4 font-normal w-[30%]">
                    Product Name
                  </th>
                  <th className="text-left py-4 font-normal w-[20%]">Price</th>
                  <th className="text-left py-4 font-normal w-[20%]">Status</th>
                  <th className="text-right py-4 font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mergedOrderItems.map((item, indx) => (
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
                    <td className="py-4">
                      <div>
                        <h3 className="font-medium text-yellow-500">
                          {"Pending"}
                        </h3>
                      </div>
                    </td>

                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-4 items-center">
                        <Link to={`/productDetails/${item._id}`}>
                          <LuView className="text-2xl text-green-500" />
                        </Link>
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
