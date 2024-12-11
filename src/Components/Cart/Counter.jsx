import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

function Counter() {
  const cartCount = useSelector((state) => state.cart.cart).length;

  console.log(cartCount);

  return (
    <div className="relative">
      <GrCart className="text-green-500 text-3xl" />
      <p
        className={`${
          cartCount === 0 && "hidden"
        } absolute bottom-4 text-green-600 font-semibold left-4 bg-green-100 px-2 rounded-full`}
      >
        {cartCount}
      </p>
    </div>
  );
}

export default Counter;
