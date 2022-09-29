const addToLS = (time) => {
  console.log("clicked", time);
  localStorage.setItem("click", 50);
};

export default addToLS;
