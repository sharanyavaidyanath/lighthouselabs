// Challenge #13 - All of the Lights
// To make late-night driving and walking safer(and to save the city energy), you've decided to install smart street lights. These lights turn on and off automatically when they sense someone near by.

// You'll need to use JavaScript to create some of the functionality to control the lights.

// Instructions
// We will be implementing this using three functions.

// The first two functions will receive an array of objects that represent street lights which may be on or off.

// Our first function, lightsOn, must set all of the lights to on and then return the array of lights.
// The second function, lightsOff, must set all the lights to "off" and then return the array of lights.
// The third function, toggleLights, will receive an array of many street lights, as well as a boolean value lightsAreOn which tells you whether or not all the lights are currently on. If lightsAreOn is true, your function should turn all of the lights off. If lightsAreOn is false, your function should turn all of the lights on.

const lightsOn = lights => lights.map(({ id }) => ({ id, on: true }));

const lightsOff = lights => lights.map(({ id }) => ({ id, on: false }));

const toggleLights = (lights, lightsAreOn) =>
  lightsAreOn ? lightsOff(lights) : lightsOn(lights);
