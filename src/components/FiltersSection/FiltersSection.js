import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterStatus,
  setFilterUpcoming,
  setFilterYear,
} from "../../redux/filtersSlice";

const FiltersSection = () => {
  const dispatch = useDispatch();
  const { filterYear, filterStatus, filterUpcoming } = useSelector(
    (state) => state.filters
  );

  // Function to convert dropdown string value to boolean
  const filterStatusHandler = (e) => {
    if (e.target.value === "true") {
      dispatch(setFilterStatus(true));
    } else if (e.target.value === "false") {
      dispatch(setFilterStatus(false));
    } else {
      dispatch(setFilterStatus(""));
    }
  };

  return (
    <div className="container px-5 py-3 d-flex justify-content-between align-items-center flex-wrap bg-white shadow-sm rounded missions-filters-section">
      <div className="my-2 d-flex justify-content-between align-items-center">
        <p className="m-2 filter-name">Filter by: </p>
        <select
          className="form-select"
          aria-label="Default select example"
          value={filterYear}
          onChange={(e) => dispatch(setFilterYear(e.target.value))}
        >
          <option value="">Year</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <p className="m-2 filter-name">Filter by: </p>
        <select
          className="form-select"
          aria-label="Default select example"
          value={filterStatus}
          onChange={filterStatusHandler}
        >
          <option value="">Status</option>
          <option value="true">Success</option>
          <option value="false">Failed</option>
        </select>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            value={filterUpcoming}
            onChange={() => dispatch(setFilterUpcoming(!filterUpcoming))}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Upcoming
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
