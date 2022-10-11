// . Write a program which tells the number of days in a month.

var getDays = function(month,year) {
   return new Date(year, month, 0).getDate();
  };
  console.log(getDays(1, 2022));
