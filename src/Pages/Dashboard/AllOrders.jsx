import React from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import TableHeaderText from "../../Components/Dashboard/TableHeaderText";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function AllOrders() {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: allProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/allProducts");
      return data;
    },
    enabled: !loading && !!user,
  });

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosPublic.delete(`/removeProduct/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your meal item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } catch (err) {
      toast.error(err.message);
    }

    console.log(id);
  };

  console.log(allProducts);

  return (
    <div>
      {" "}
      <div className="min-h-[calc(100vh-80px)] border-2 border-cyan-300 space-y-7">
        <div className="m-2">
          <TableHeaderText text={"All Orders"} count={allProducts.length} />

          {isLoading || loading ? (
            <LoadingSpinner />
          ) : (
            <div className="mt-4 border p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 font-normal">
                      Product Image
                    </th>
                    <th className="text-left py-4 font-normal">Product Name</th>
                    <th className="text-left py-4 font-normal">
                      Order Quantity
                    </th>
                    <th className="text-left py-4 font-normal">Price</th>
                    <th className="text-left py-4 font-normal">Status</th>
                    <th className="text-right py-4 font-normal pr-6">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.splice(0, 6).map((item, indx) => (
                    <tr key={indx} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item?.product_img}
                            alt="Black Garlic"
                            className="w-30 h-20 object-cover rounded"
                          />
                        </div>
                      </td>

                      <td className="py-4">
                        <div>
                          <h3 className="font-medium">{item?.product_name}</h3>
                        </div>
                      </td>

                      <td className="py-4 pl-10">
                        <div>
                          <h3 className="font-medium">1</h3>
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
                            Pending
                          </h3>
                        </div>
                      </td>

                      <td className="py-4 text-right">
                        <div className="flex justify-end gap-4 items-center">
                          <Link
                            to={`/dashboard/updateProduct/${item?._id}`}
                            className="cursor-pointer"
                          >
                            <CiEdit className="text-3xl text-green-500" />
                          </Link>

                          <CiSquareRemove
                            className="cursor-pointer text-3xl text-red-500"
                            onClick={() => handleDelete(item?._id)}
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
    </div>
  );
}
