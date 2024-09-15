import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">#VANLIFE</Link>
      </h1>
      <ul>
        <li>
          <Link to="/host">Host</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/vans">Vans</Link>
        </li>
      </ul>
    </nav>
  );
}
