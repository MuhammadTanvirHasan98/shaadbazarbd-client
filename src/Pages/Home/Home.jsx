import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Banner from "../../Components/Banner";
import AllProducts from "../../Components/AllProducts/AllProducts";

export default function Home() {
  const { logOut } = useAuth();
  return (
    <div>
      <div className="mt-6 mb-20">
        <Banner />
      </div>
      <div>
        <AllProducts />
      </div>
    </div>
  );
}
