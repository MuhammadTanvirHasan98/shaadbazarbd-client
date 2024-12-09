import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const AllProducts = () => {
  const [cards, setCards] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);

  const getCards = async () => {
    const { data } = await axiosPublic.get("/allProducts");
    setCards(data);
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <p className="text-xs font-bold text-green-500">
          ◉ Top selling Foods ◉
        </p>
        <hr className="w-20  mx-auto border-green-500 flex justify-end" />

        <h1 className="lg:text-5xl text-3xl merienda font-bold my-6">
          Our All Authentic Foods
        </h1>
        <p className="text-gray-500  w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
          At{" "}
          <span className="merienda text-sm font-bold text-black">
            Shaadbazar
            <span className="text-green-500"> BD</span>
          </span>
          , where authenticity and nature unite to bring you the finest,
          wholesome foods. We are dedicated to offering products that are as
          close to nature as possible, free from artificial additives,
          preservatives, and unnecessary processing.
        </p>
      </div>

      <div className="lg:w-[70%] md:w-[80%] w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:gap-8 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card) => (
            <ProductCard key={card._id} card={card} />
          ))}
        </div>

        {/* Button */}

        <div className="flex justify-center mt-16 ">
          <Link to="/allFoods">
            <button className="btn btn-outline text-[#33b658] btn-sm px-6 rounded-md hover:bg-[#6fd78d] transition duration-700 font-extrabold merienda text-lg">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
