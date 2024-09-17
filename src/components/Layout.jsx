import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      {/* displays navbar */}
      <Navbar />
      {/* display page content */}
      <Outlet />
      {/* displays footer */}
      <Footer />
    </>
  );
}
