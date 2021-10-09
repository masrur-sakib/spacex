import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMissionsData } from "../../redux/missionsSlice";
import FiltersSection from "../FiltersSection/FiltersSection";
import HeroSection from "../HeroSection/HeroSection";

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const { searchTerm } = useSelector((state) => state.search);

  useEffect(() => {
    // API data fetching function
    dispatch(getMissionsData());
  }, [dispatch]);
  return (
    <>
      <HeroSection />
      <FiltersSection />
      <div className="container p-4 missions-cards-section">
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
                .slice(0)
                .reverse()
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
    </>
  );
};

export default Missions;
