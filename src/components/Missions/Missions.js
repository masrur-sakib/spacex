import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMissionsData } from "../../redux/missionsSlice";

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, status } = useSelector((state) => state.missions);
  const { searchTerm } = useSelector((state) => state.search);
  const { filterYear, filterStatus, filterUpcoming } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    // API data fetching function
    dispatch(getMissionsData());
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <div className="mt-5 d-flex justify-content-center missions-cards-section">
          <div
            className="spinner-border"
            style={{ width: "80px", height: "80px" }}
            role="status"
          >
            <span
              className="visually-hidden"
              style={{ width: "80px", height: "80px" }}
            >
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="container pt-2 pb-5 missions-cards-section">
          <div className="row">
            {missions.length > 0
              ? missions
                  // Search Filter
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
                  // Year Filter
                  .filter((mission) => {
                    if (filterYear === "" || filterYear === "Year") {
                      return mission;
                    } else if (filterYear === mission.launch_year) {
                      return mission;
                    }
                    return null;
                  })
                  // Status Filter
                  .filter((mission) => {
                    if (filterStatus === "") {
                      return mission;
                    } else if (filterStatus === mission.launch_success) {
                      return mission;
                    }
                    return null;
                  })
                  // Upcoming Filter
                  .filter((mission) => {
                    if (filterUpcoming === mission.upcoming) {
                      return mission;
                    }
                    return null;
                  })
                  .map((mission) => (
                    <div
                      key={mission.mission_name}
                      className="col-lg-4 col-md-6"
                    >
                      <div className="m-2 p-4 border shadow-sm">
                        <h5 className="mb-4">
                          <span className="text-secondary">Mission:</span>{" "}
                          <span className="fw-bolder">
                            {mission.mission_name.slice(0, 13)}{" "}
                            {mission.mission_name.length > 13 ? ".." : ""}
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
                                  : mission.launch_success === null
                                  ? "text-secondary fw-bolder"
                                  : "text-danger fw-bolder"
                              }
                            >
                              {mission.launch_success
                                ? "Success"
                                : mission.launch_success === null
                                ? "N/A"
                                : "Failed"}{" "}
                            </span>
                          </p>
                        </div>
                        {mission.links.video_link !== null ? (
                          <a
                            className={
                              mission.links.video_link !== null &&
                              mission.launch_success
                                ? "btn btn-light border border-success rounded shadow-sm btn-sm"
                                : mission.launch_success === false
                                ? "btn btn-light border border-danger rounded shadow-sm btn-sm"
                                : "btn btn-light border border-secondary rounded shadow-sm btn-sm"
                            }
                            href={mission.links.video_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Video Link
                          </a>
                        ) : (
                          <p>*video not available</p>
                        )}
                      </div>
                    </div>
                  ))
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Missions;
