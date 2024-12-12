import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../Shared/ProductCard/ProductCard";

export default function SearchResult() {
  const products = useLoaderData();
  console.log("Search product list:", products);
  const { search } = useParams();
  console.log(search);

  return (
    <div>
      <div>
        <p className="bg-green-400 text-white  text-center text-3xl py-6">
          {" "}
          {`Total ${products.length} ${
            products.length > 1 ? "products" : "product"
          } found for "${search}"`}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center space-y-4 mt-20">
          <h1 className="text-green-500 text-3xl font-semibold">
            <span className="text-red-600"> Sorry,</span> we don't have this
            product!
          </h1>
          <p className="text-gray-600">Visit our website and try again.</p>
        </div>
      ) : (
        <div className="w-[80%] mx-auto my-20 ">
          <div className="grid grid-cols-1 md:gap-8 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((card) => (
              <ProductCard key={card._id} card={card} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
