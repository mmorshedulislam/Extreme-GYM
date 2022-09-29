const addToLS = (time) => {
  // console.log("clicked", time);
  localStorage.setItem("breakTime", time);
  getStoredTime();
};

const getStoredTime = () => {
  const storedTime = localStorage.getItem("breakTime");
  return storedTime;
};

export { addToLS, getStoredTime };
