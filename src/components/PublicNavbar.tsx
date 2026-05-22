// ELEMENTOS DE NAVEGACION
import { Link } from "react-router-dom";

// COMPONENTE NAVBAR PUBLICO
export default function PublicNavbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/login">Login</Link>
      <hr />
    </nav>
  );
}