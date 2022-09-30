// use local storage to manage tour time data
const addToDb = (addedPlace) => {
  let tourTime = {};

  //get the tour time from local storage
  const storedDay = localStorage.getItem("tour-time");
  if (storedDay) {
    tourTime = JSON.parse(storedDay);
  }

  
  const day = tourTime[addedPlace.id];
  if (!day) {
    tourTime[addedPlace.id] = addedPlace.timeRequired;
  }
  localStorage.setItem("tour-time", JSON.stringify(tourTime));
};

const getSavedDay = () => {
  let tourTime = {};

  //get the shopping cart from local storage
  const storedDay = localStorage.getItem("tour-time");
  if (storedDay) {
    tourTime = JSON.parse(storedDay);
  }

  return tourTime;
};

const removeFromDb = (id) => {
  const storedDay = localStorage.getItem("tour-time");
  if (storedDay) {
    const tourTimes = JSON.parse(storedDay);
    if (id in tourTimes) {
      delete tourTimes[id];
      localStorage.setItem("shopping-cart", JSON.stringify(tourTimes));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToDb,
  getSavedDay,
  removeFromDb,
  deleteShoppingCart,
};
