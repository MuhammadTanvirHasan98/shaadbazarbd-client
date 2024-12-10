import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import FiltersSidebar from "../../Components/FilterSidebar/FilterSidebar";

function Collections() {
  const products = useLoaderData();
  // console.log(products);
  const params = useParams();
  console.log(params.category);
  let category = "";
  if (params.category) {
    category = params.category.toUpperCase();
  }

  return (
    <div>
      <div>
        <p className="bg-green-400 text-white  text-center text-3xl py-6">
          {" "}
          {params.category ? category : "Products"}
        </p>
      </div>

      <div className="flex gap-10 w-[80%] mx-auto my-10 ">
        <div>
          <FiltersSidebar />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:gap-8 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((card) => (
              <ProductCard key={card._id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
