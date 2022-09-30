// use local storage to manage tour time data
const addToDb = (id) => {
  let tourTime = {};

  //get the tour time from local storage
  const storedDay = localStorage.getItem("tour-time");
  if (storedDay) {
    tourTime = JSON.parse(storedDay);
  }

  // add quantity
  const day = tourTime[id];
  if (day) {
    const newDay = day + 1;
    tourTime[id] = newDay;
  } else {
    tourTime[id] = 1;
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
