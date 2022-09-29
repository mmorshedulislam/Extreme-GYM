import React from "react";
import "./Activity.css";

const Activity = ({ activity, addToList }) => {
  const { name, img, time } = activity;
  // console.log(activity);
  return (
    <div className="exercise">
      <img src={img} alt="" />
      <div className="exercise-info">
        <h2>{name}</h2>
        <p>For Age: 20-25</p>
        <p>Time Required: {time}s</p>
      </div>
      <button onClick={() => addToList(activity)} className="exercise-btn">Add To List</button>
    </div>
  );
};

export default Activity;
