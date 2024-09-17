import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <h1>
        <NavLink to="/">#VANLIFE</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/host">Host</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/vans">Vans</NavLink>
        </li>
      </ul>
    </nav>
  );
}
