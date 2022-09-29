import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import profile from "./morshed.jpg";
import "./ExerciseDetails.css";

const ExerciseDetails = () => {
  return (
    <div className="ExerciseDetails">
      <div className="profile">
        <img src={profile} alt="" />
        <div className="profile-info">
          <h3>Md. Morshedul Islam</h3>
          <p>
            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Chittagong,
            Bangladesh.
          </p>
        </div>
      </div>
      <div className="body">
        <div>
          <h3>
            75 <span>kg</span>
          </h3>
          <h3>Weight</h3>
        </div>
        <div>
          <h3>
            75 <span>kg</span>
          </h3>
          <h3>Weight</h3>
        </div>
        <div>
          <h3>
            75 <span>kg</span>
          </h3>
          <h3>Weight</h3>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
