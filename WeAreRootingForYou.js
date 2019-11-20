// Challenge #17 - We're Rooting For You!
// At this year's town festival the Codeville Vegetation Association will be handing out several awards for the best vegetables in a given category. We'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness OR their plumpness.

// Instructions
// For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

// Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

const judgeVegetable = (vegetables, metric) => {
  // Code here!
  return vegetables.reduce((highestRanked, input) =>
    input[metric] > highestRanked[metric] ? input : highestRanked
  ).submitter;
};
