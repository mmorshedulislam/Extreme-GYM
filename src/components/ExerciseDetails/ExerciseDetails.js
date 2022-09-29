import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import profile from "./morshed.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ExerciseDetails.css";
import { addToLS, getStoredTime } from "../fakedb/fakedb";

const ExerciseDetails = (props) => {
  const { exerciseTime } = props;
  // console.log(exerciseTime);

  let time = 0;
  for (const activity of exerciseTime) {
    time = time + parseFloat(activity.time);
  }

  const [timeBreak, setTimeBreak] = useState([]);
  useEffect(() => {
    fetch("break.json")
      .then((res) => res.json())
      .then((data) => setTimeBreak(data));
  }, []);

  // console.log(timeBreak);

  const notify = () => toast("Congratulations! You successfully completed.");

  const [brkTime, setBrkTime] = useState([]);
  const addToBreak = (brkTime) => {
    console.log("clicked", brkTime);
    setBrkTime(brkTime.breakTime);
  };
  // console.log(brkTime);

  const [saveTime, setSaveTime] = useState([]);
  useEffect(() => {
    const storedTimes = getStoredTime(brkTime.breakTime);
    setSaveTime(storedTimes);
    // console.log(storedTimes);
  }, [brkTime]);

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
          {timeBreak.map((breakTime) => (
            <BreakBtn 
            key={breakTime.id}
            breakTime={breakTime} 
            addToBreak={addToBreak}
            ></BreakBtn>
          ))}
        </div>
      </div>
      <div className="exercise-detail-container">
        <h2>Exercise Details</h2>
        <div className="exercise-detail">
          <h3>Exercise Time</h3>
          <h3>
            <span>{time} </span>seconds
          </h3>
        </div>
        <div className="exercise-detail">
          <h3>Break Time</h3>
          <h3>
            {/* <span>{brkTime} </span>seconds */}
            <span>{saveTime} </span>seconds
          </h3>
        </div>
      </div>
      <div>
        <button className="btn-activity" onClick={notify}>
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

const BreakBtn = ({ breakTime, addToBreak }) => {
  return (
    <div className="">
      <div onClick={() => addToLS(breakTime.breakTime)}>
        <button onClick={() => addToBreak(breakTime)}>
          <span>{breakTime.breakTime}</span>s
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
