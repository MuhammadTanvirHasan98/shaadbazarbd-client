import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function Home() {
  const { logOut } = useAuth();
  return (
    <div>
      Home Page
      <button className="btn btn-outline btn-sm" onClick={logOut}>
        Log out
      </button>
      <Link to="/login">Login</Link>
    </div>
  );
}
