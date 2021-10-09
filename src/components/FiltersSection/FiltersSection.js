import React from "react";

const FiltersSection = () => {
  return (
    <div className="container d-flex justify-content-around align-items-center bg-white shadow-sm missions-filters-section">
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-2">Year: </p>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select Year</option>
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
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-2">Status: </p>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select Status</option>
          <option value="success">Successful</option>
          <option value="failed">Failed</option>
          <option value="n/a">N/A</option>
        </select>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Upcoming
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
