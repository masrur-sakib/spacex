import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="fs-3 fw-bold navbar-brand" to="./">
          SpaceX
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
