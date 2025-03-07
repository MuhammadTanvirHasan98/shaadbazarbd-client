import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoSearchOutline } from "react-icons/io5";
import Counter from "../../Components/Cart/Counter";
import WishCounter from "../../Components/Wishlist/WishCounter";
import useAdmin from "../../Hooks/useAdmin";

function UpNav() {
  const { user, logOut } = useAuth();
  const [isAdmin, isLoading] = useAdmin();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
    return navigate(`/searchProduct/${searchValue}`);
  };

  console.log(search);

  return (
    <div>
      <p className="text-sm bg-green-500 p-2 text-center text-white">
        আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +8801750996919 | হট
        লাইন: 09642-922922
      </p>

      <div className="flex justify-center lg:justify-between items-center m-2 w-[90%] mx-auto">
        <div>
          {" "}
          {/*Search Field  */}
          <form onSubmit={handleSearch}>
            <div className="flex items-center   w-full mx-auto">
              <input
                type="text"
                placeholder="Search meals here..."
                name="search"
                className="block w-full rounded-r-none rtl:rounded-r-lg rtl:rounded-l-none  rounded-lg border bg-white px-5 lg:py-2 py-1 focus:outline-none focus:ring focus:border-green-500 focus:ring-[#60f674] focus:ring-opacity-40"
              />
              {/* <Link to={`/searchProduct/${search}`}> */}
              <button
                type="submit"
                className="lg:py-2.5 py-1.5 px-3 text-white text-2xl bg-green-400  border border-r-0 rtl:rounded-r-lg  rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-r-lg font-bold"
              >
                <IoSearchOutline />
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          {" "}
          <Link className="md:text-3xl text-xl font-extrabold ">
            Shaadbazar <span className="text-green-500 ">BD</span>{" "}
          </Link>
        </div>
        <div className="hidden  z-10 lg:flex gap-6 items-center">
          {/* Wishlist */}
          <Link to="/wishList" className="mr-2">
            <WishCounter />
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <Counter />
          </Link>

          {user ? (
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="user image" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-3 font-semibold"
                >
                  {isAdmin ? (
                    <li>
                      <Link to="/dashboard">Admin Dashboard</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/orderedProducts">My ordered list</Link>
                    </li>
                  )}
                  <li>
                    <Link
                      onClick={() => logOut()}
                      className="text-center block bg-green-400 hover:text-green-700 text-white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end lg:w-[50%] w-[30%]">
              <Link
                to="/login"
                className="font-bold text-xl border-x-2 border-green-600 rounded-lg px-3 border-y-0 text-green-700  hover:text-black"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpNav;
