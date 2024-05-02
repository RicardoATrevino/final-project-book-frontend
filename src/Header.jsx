import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <Link to="/" className="HomePage">
        | Home |
      </Link>
      <Link to="/signup" className="Signup">
        | Signup |
      </Link>
      <Link to="/login" className="loginlogout">
        | Log In |
      </Link>
      <Link to="/logout" className="loginlogout">
        | Log Out |
      </Link>
    </nav>
  );
}
