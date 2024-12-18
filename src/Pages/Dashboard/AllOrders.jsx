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
    data: allOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/orders");
      return data;
    },
    enabled: !loading && !!user,
  });

  console.log(allOrders);

  return (
    <div>
      {" "}
      <div className="min-h-[calc(100vh-80px)] border-2 border-cyan-300 space-y-7">
        <div className="m-2">
          <TableHeaderText text={"All Orders"} count={allOrders.length} />

          {isLoading || loading ? (
            <LoadingSpinner />
          ) : (
            <div className="mt-4 border p-4">
              <div>
                {allOrders.map((order, idx) => (
                  <div key={idx} className="border p-6 mb-3">
                    {/* User info */}
                    <div className="flex gap-10">
                      <div>
                        <h1 className="text-sm">
                          Customer Name: {order?.name}
                        </h1>
                        <p>Email: {order?.email}</p>
                        <p>Phone: {order?.phone}</p>
                        <p className="mb-10">Subtotal: {order?.subTotal}</p>
                        <p>
                          Status:{" "}
                          <span className="text-orange-300">
                            {order?.status}
                          </span>{" "}
                        </p>
                      </div>
                      <div>
                        {order.order.map((item, idx) => (
                          <div className="space-x-2">
                            <div>
                              <h1 className="text-sm">
                                Item: {item?.product_name}
                              </h1>
                              <p>Price: {item?.price}</p>
                              <p>Quantity: {item?.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
