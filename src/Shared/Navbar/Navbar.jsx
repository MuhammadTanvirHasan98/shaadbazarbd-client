import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Counter from "../../Components/Cart/Counter";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <div className="flex flex-col  lg:flex-row gap-4 ">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/"
        >
          All Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/ghee"
        >
          Ghee {"( ঘি )"}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/honey"
        >
          Honey {"( মধু )"}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/oil"
        >
          Oil {"( তেল )"}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/jaggery"
        >
          Jaggery {"( গুড় )"}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/seeds"
        >
          Nuts & Seeds
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-green-700 text-green-700"
              : "font-bold text-lg flex justify-center text-green-700"
          }
          to="/collections/masala"
        >
          Masala
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className=" bg-gradient-to-tr from-[#ceebd4] via-transparent border-2 border-green-500 to-white ">
      <div className=" max-w-[2400px] mx-auto">
        <div className="navbar lg:w-[86%] p-0  w-[95%] mx-auto">
          <div className="navbar-start lg:w-[50%] w-full">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn flex btn-sm px-1 btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-8 md:w-8 h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link className="md:text-2xl text-xl font-extrabold lg:hidden">
              Shaadbazar <span className="text-green-500 ">BD</span>{" "}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>

          <div className="lg:hidden flex gap-4">
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
                    <li>
                      <Link to="/addedFoods">My added food items</Link>
                    </li>
                    <li>
                      <Link to="/addFood">Add a food item</Link>
                    </li>
                    <li>
                      <Link to="/orderedFoods">My ordered food items</Link>
                    </li>
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
    </div>
  );
};

export default Navbar;
