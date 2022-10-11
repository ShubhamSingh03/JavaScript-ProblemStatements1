// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2


/*
   for finding x-intercept set y=0 and solve for x
   0 = 2x-2
  -2x = -2
   x = 1
   so, x-intercept is (1, 0)
 
   Similarly, for finding y-intercept set x=0 and solve for y
   y = (2*0) - 2
   y = -2
   so, y-intercept is (0, -2)
*/

const y1 = 0;
const y2 = -2;
const x1 = 1;
const x2 = 0;
const slope = (y2 - y1) / (x2 - x1);
console.log(`Slope is: ${slope}`);

