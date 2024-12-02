import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Banner from "../../Components/Banner";

export default function Home() {
  const { logOut } = useAuth();
  return (
    <div>
      <div className="my-20">
        <Banner />
      </div>
      Home Page
      <button className="btn btn-outline btn-sm" onClick={logOut}>
        Log out
      </button>
      <Link to="/login">Login</Link>
    </div>
  );
}
