import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import "./Exercise.css";

const Exercise = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="exercise-container">
      <div className="exercise-section">
        {activities.map((activity) => (
          <Activity activity={activity}></Activity>
        ))}
      </div>
      <div className="exercise-detail-section">
       <ExerciseDetails></ExerciseDetails>
      </div>
    </div>
  );
};

export default Exercise;
