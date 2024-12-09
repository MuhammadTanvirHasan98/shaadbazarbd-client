import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Banner from "../../Components/Banner";
import AllProducts from "../../Components/AllProducts/AllProducts";

export default function Home() {
  const { logOut } = useAuth();
  return (
    <div>
      <div className="mt-12 mb-32">
        <Banner />
      </div>
      <div>
        <AllProducts />
      </div>
      Home Page
      <button className="btn btn-outline btn-sm" onClick={logOut}>
        Log out
      </button>
      <Link to="/login">Login</Link>
    </div>
  );
}
