import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMissionsData } from "../../redux/missionsSlice";
import { setSearchTerm } from "../../redux/searchSlice";

const Missions = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const { searchTerm } = useSelector((state) => state.search);

  // Search Function
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target.searchTerm.value));
    searchRef.current.value = "";
  };

  useEffect(() => {
    // API data fetching function
    dispatch(getMissionsData());
  }, [dispatch]);
  return (
    <div className="container missions-section">
      <div className="py-2 d-flex flex-wrap justify-content-center align-items-center border-bottom border-secondary missions-title-section">
        <h3 className="m-2">Missions:</h3>
        <form
          className="mx-4 my-2 d-flex justify-content-center align-items-center flex-grow-1"
          onSubmit={searchHandler}
        >
          <input
            ref={searchRef}
            className="form-control bg-light border border-1 border-secondary shadow-none rounded-0"
            type="search"
            name="searchTerm"
            placeholder="Search by Rocket Name like falcon-1, falcon 9, falcon heavy"
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
        <div className="m-2 d-flex justify-content-end align-items-center">
          <div className="m-1 px-2 border border-secondary">
            Launch Year: Dropdown
          </div>
          <div className="mx-1 px-2 border border-secondary">
            Launch Status: Dropdown
          </div>
          <div className="mx-1 px-2 border border-secondary">
            Checkbox: Upcoming
          </div>
        </div>
      </div>
      <div className="p-4 missions-cards-section">
        <div className="row">
          {missions.length > 0
            ? missions
                .filter((mission) => {
                  if (searchTerm === "") {
                    return mission;
                  } else if (
                    mission.rocket.rocket_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return mission;
                  }
                  return null;
                })
                .map((mission) => (
                  <div key={mission.mission_name} className="col-lg-4 col-md-6">
                    <div className="m-2 p-4 border shadow-sm">
                      <h5 className="mb-4">
                        <span className="text-secondary">Mission:</span>{" "}
                        <span
                          className={
                            mission.launch_success
                              ? "text-success fw-bolder"
                              : "text-danger fw-bolder"
                          }
                        >
                          {mission.mission_name.slice(0, 10)}{" "}
                          {mission.mission_name.length > 10 ? ". ." : ""}
                        </span>
                      </h5>
                      <div className="mb-4 text-secondary">
                        <p className="fs-6 my-1">
                          <span className="mission-detail-name">
                            Flight Number
                          </span>
                          : {mission.flight_number}
                        </p>
                        <p className="fs-6 my-1">
                          <span className="mission-detail-name">
                            Launch Year
                          </span>
                          : {mission.launch_year}
                        </p>
                        <p className="fs-6 my-1">
                          <span className="mission-detail-name">
                            Rocket Name
                          </span>
                          : {mission.rocket.rocket_name}
                        </p>
                        <p className="fs-6 my-1">
                          <span className="mission-detail-name">
                            Rocket type
                          </span>
                          : {mission.rocket.rocket_type}
                        </p>
                        <p className="fs-6 my-1">
                          <span className="mission-detail-name">
                            Launch Status
                          </span>
                          :{" "}
                          <span
                            className={
                              mission.launch_success
                                ? "text-success fw-bolder"
                                : "text-danger fw-bolder"
                            }
                          >
                            {mission.launch_success ? "Success" : "Failed"}{" "}
                          </span>
                        </p>
                      </div>
                      <a
                        className="btn btn-secondary btn-sm"
                        href={mission.links.video_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Video Link
                      </a>
                    </div>
                  </div>
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Missions;
