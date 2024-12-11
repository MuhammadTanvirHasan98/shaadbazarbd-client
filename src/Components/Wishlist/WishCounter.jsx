import { TbJewishStar } from "react-icons/tb";
import React from "react";
import { useSelector } from "react-redux";

function WishCounter() {
  const wishCount = useSelector((state) => state.wish.wish).length;

  console.log(wishCount);

  return (
    <div className="relative">
      <TbJewishStar className="text-green-500 text-3xl" />
      <p className="absolute bottom-4 text-green-600 font-semibold left-4 bg-green-100 px-2 rounded-full">
        {wishCount}
      </p>
    </div>
  );
}

export default WishCounter;
