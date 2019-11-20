// Challenge #9 - Driving Mayor Daisy
// As Mayor, you want one of your legacies to be bettering street design
//enough to improve traffic flow and reduce congestion.
// You've decided to start by installing special sensors on some streets
//to monitor how often cars pass by, and track their speeds.

// Instructions
// Complete the function, carPassing(cars, speed), that takes in an array
// of car objects, and the speed of a car as it passes the sensor.
//This function should create a new object with with a property called
// speed, and another property called time and add it to the cars array.
// We can retrieve the current time, for setting the time property,
// by using the Date.now() function, which is built into JavaScript!

// Our function should return an array that includes all of the elements
// in cars as well as our new element.

const carPassing = (cars, speed) => {
  // Code here!
  cars.push({ time: Date.now(), speed });
  return cars;
};
