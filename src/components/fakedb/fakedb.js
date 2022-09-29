const addToLS = (time) => {
  // console.log("clicked", exerciseTime);
  localStorage.setItem("breakTime", time);
  getStoredTime();
};

const getStoredTime = () => {
  const storedTime = localStorage.getItem("breakTime");
  return storedTime;
};

const addToLSExerciseTime = (time) => {
  localStorage.setItem('exerciseTime', time)
  console.log(time);
}

export { addToLS, getStoredTime, addToLSExerciseTime };
