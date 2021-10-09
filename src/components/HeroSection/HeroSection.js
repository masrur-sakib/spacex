import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/searchSlice";

const HeroSection = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  // Search Function
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target.searchTerm.value));
    searchRef.current.value = "";
  };
  return (
    <div className="hero-section d-flex justify-content-center align-items-center">
      <div>
        <h4>Explore the more details of SpaceX mission</h4>
        <form
          className="mx-4 my-4 p-2 d-flex justify-content-center align-items-center bg-white rounded-pill overflow-hidden"
          onSubmit={searchHandler}
        >
          <input
            ref={searchRef}
            className="form-control bg-white border-0 shadow-none rounded-0"
            type="search"
            name="searchTerm"
            placeholder="Search by Rocket Name like falcon heavy"
            aria-label="Search"
          />
          <button className="btn btn-white shadow-none rounded-0" type="submit">
            <span>
              <i
                style={{ color: "black", background: "white" }}
                className="bi bi-search"
              ></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
