// Challenge #20 - Bouncy Castles
// There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

// The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

// Instructions
// Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

// In this challenge, we'll need to implement four functions.

// The first three will calculate the volume of the individual shapes:

// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth

// The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

// Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.

const PI = 3.14159;

const sphereVolume = function(radius) {
  let volume = (4 / 3) * PI * radius * radius * radius;
  return volume;
};

const coneVolume = function(radius, height) {
  let volume = (1 / 3) * PI * radius * radius * height;
  return volume;
};

const prismVolume = function(height, width, depth) {
  let volume = height * width * depth;
  return volume;
};

const totalVolume = function(solids) {
  let finalVolume = 0;

  for (let solid of solids) {
    if (solid.type === "sphere") {
      finalVolume += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      finalVolume += coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
      finalVolume += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return finalVolume;
};

const prism = {
  type: "prism",
  height: 5,
  width: 6,
  depth: 3
};

const cone = {
  type: "cone",
  radius: 3,
  height: 6
};

const castle = [cone, prism];

const result = totalVolume(castle);
