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
            70<span>kg</span>
          </h3>
          <h3>Weight</h3>
        </div>
        <div>
          <h3>5.8</h3>
          <h3>Height</h3>
        </div>
        <div>
          <h3>
            22<span>yrs</span>
          </h3>
          <h3>Age</h3>
        </div>
      </div>
      <div className="addABreak">
        <h2>Add A Break</h2>
        <div className="addABreakBtn">
          <button>
            <span>10</span>s
          </button>
          <button>
            <span>20</span>s
          </button>
          <button>
            <span>30</span>s
          </button>
          <button>
            <span>40</span>s
          </button>
          <button>
            <span>50</span>s
          </button>
        </div>
      </div>
      <div className="exercise-detail-container">
        <h2>Exercise Details</h2>
        <div className="exercise-detail">
          <h3>Exercise Time</h3>
          <h3><span>200 </span>seconds</h3>
        </div>
        <div className="exercise-detail">
          <h3>Break Time</h3>
          <h3><span>15 </span>seconds</h3>
        </div>
      </div>
      <div>
        <button className="btn-activity">Activity Completed</button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
