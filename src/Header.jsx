import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="text-center space-x-3 pt-3 font-serif">
      <Link to="/" className="hover:bg-white-700 ">
        | Home |
      </Link>
      <Link to="/signup" className="">
        | Signup |
      </Link>
      <Link to="/login" className="">
        | Log In |
      </Link>
      <Link to="/logout" className="">
        | Log Out |
      </Link>
    </nav>
  );
}
