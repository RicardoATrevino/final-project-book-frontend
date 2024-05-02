import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <Link to="/signup">Signup</Link>
      <br></br>
      <Link to="/">Home</Link>
    </nav>
  );
}
