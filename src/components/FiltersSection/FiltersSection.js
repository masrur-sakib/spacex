import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterStatus,
  setFilterUpcoming,
  setFilterYear,
} from "../../redux/filtersSlice";

const FiltersSection = () => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
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

  const showYearDropdownOptions = (missions) => {
    let yearDropdownOptions = "";
    const launchYearsAll = ["Year"];

    // Create new years array with all existing years from api data
    for (let i = 0; i < missions.length; i++) {
      launchYearsAll.push(missions[i].launch_year);
    }

    // Remove duplicate years from years array
    const launchYears = [...new Set(launchYearsAll)];

    // Storing all years option in a variable
    for (let i = 0; i < launchYears.length; i++) {
      yearDropdownOptions += `<option value="${launchYears[i]}">${launchYears[i]}</option>`;
    }
    dropdownRef.current.innerHTML = yearDropdownOptions;
  };

  useEffect(() => {
    showYearDropdownOptions(missions);
  }, [missions]);

  return (
    <div className="container px-5 py-3 d-flex justify-content-between align-items-center flex-wrap bg-white shadow-sm rounded missions-filters-section">
      <div className="my-2 d-flex justify-content-between align-items-center">
        <p className="m-2 filter-name">Filter by: </p>
        <select
          className="form-select"
          ref={dropdownRef}
          aria-label="Default select example"
          value={filterYear}
          onChange={(e) => {
            dispatch(setFilterYear(e.target.value));
          }}
        ></select>
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
