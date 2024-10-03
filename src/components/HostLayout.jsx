import { Link, Outlet, NavLink } from "react-router-dom";
export default function HostLayout() {
  return (
    <>
      <nav className="host-page-navbar">
        <NavLink to="/host">Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/host-vans">Vans</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
