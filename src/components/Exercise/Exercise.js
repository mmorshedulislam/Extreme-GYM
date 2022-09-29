import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import "./Exercise.css";

const Exercise = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addToList = (exerciseTime) => {
    const newTime = [...time, exerciseTime];
    setTime(newTime);
  };

  return (
    <div className="exercise-container">
      <div className="exercise-section">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            addToList={addToList}
          ></Activity>
        ))}
      </div>
      <div className="exercise-detail-section">
        <ExerciseDetails exerciseTime={time}></ExerciseDetails>
      </div>
    </div>
  );
};

export default Exercise;
