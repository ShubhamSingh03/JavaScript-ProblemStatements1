// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = 0.5 * baseValue * heightValue;

console.log(
  `The area of the triangle is ${areaValue}`
);

// in google console