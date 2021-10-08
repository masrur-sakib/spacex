import React, { useEffect, useState } from "react";

const Missions = () => {
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMissions(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container missions-section">
      <div className="py-2 border-bottom border-secondary missions-title-section">
        <h5>Missions</h5>
      </div>
      <div className="p-4 missions-cards-section">
        <div className="row">
          {missions.length > 0
            ? missions.map((mission) => (
                <div key={mission.mission_name} className="col-md-4">
                  <div className="m-2 p-4 border shadow-sm">
                    <h5 className="mb-4">
                      Mission:{" "}
                      <span
                        className={
                          mission.launch_success
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {mission.mission_name}
                      </span>
                    </h5>
                    <div className="mb-4">
                      <p className="fs-5 my-1">
                        Flight Number: {mission.flight_number}
                      </p>
                      <p className="fs-5 my-1">
                        Launch Year: {mission.launch_year}
                      </p>
                      <p className="fs-5 my-1">
                        Launch Site: {mission.launch_site.site_name}
                      </p>
                      <p className="fs-5 my-1">
                        Rocket Name: {mission.rocket.rocket_name}
                      </p>
                      <p className="fs-5 my-1">
                        Rocket type: {mission.rocket.rocket_type}
                      </p>
                      <p className="fs-5 my-1">
                        Launch Status:{" "}
                        <span
                          className={
                            mission.launch_success
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {" "}
                          {mission.launch_success ? "Success" : "Fail"}{" "}
                        </span>
                      </p>
                    </div>
                    <a
                      className="btn btn-secondary"
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
