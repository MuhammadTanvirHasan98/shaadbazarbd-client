import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function FiltersSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  console.log(location.pathname);

  const categories = [
    { name: "All Categories", href: "/collections/" },
    { name: "Ghee(ঘি)", href: "/collections/ghee" },
    { name: "Honey", href: "/collections/honey" },
    { name: "Oil", href: "/collections/oil" },
    { name: "Jaggery (গুড়)", href: "/collections/jaggery" },
    { name: "Nuts & Seeds", href: "/collections/seeds" },
    { name: "Masala", href: "/collections/masala" },
  ];

  return (
    <div className="w-64 p-4">
      <h2 className="text-3xl font-medium mb-4">Filters</h2>

      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-2 text-left hover:text-gray-600"
        >
          <span className="text-xl">Collections</span>
          {isOpen ? (
            <GoChevronUp className="w-4 h-4" />
          ) : (
            <GoChevronDown className="w-4 h-4" />
          )}
        </button>

        {isOpen && (
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className={`${
                  location.pathname === category.href ? "text-green-600" : ""
                } block text-gray-500 hover:text-black font-semibold`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
