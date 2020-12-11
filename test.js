const moment = require("moment");

arr = [
  {
    date: 20201210
  },
  {
    date: 20201211
  },
  {
    date: 20201212
  }
];

// arr.forEach(e => {
//   const time = moment(e.date, "YYYYMMDD").format("YY/MM");
//   console.log(time);
// });

const todaysDate = () => {
  const futureDate = moment().format("YYYY-MM-DD");
  return futureDate;
};

const subtract2Days = () => {
  const previousDate = moment()
    .subtract(2, "days")
    .format("YYYY-MM-DD");
  return previousDate;
};

console.log(subtract2Days());
console.log(todaysDate());
