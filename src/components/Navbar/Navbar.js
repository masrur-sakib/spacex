import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="fs-3 fw-bold navbar-brand" to="./">
          SpaceX
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <form className="d-flex justify-content-center align-items-center flex-grow-1">
            <input
              className="form-control w-50 bg-light border border-1 border-secondary shadow-none rounded-0"
              type="search"
              placeholder="Search by Rocket Name"
              aria-label="Search"
            />
            <button
              className="btn btn-secondary shadow-none rounded-0"
              type="submit"
            >
              <span>
                <i className="bi bi-search"></i>
              </span>
            </button>
          </form>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
