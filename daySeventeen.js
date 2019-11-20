//

const judgeVegetable = (vegetables, metric) => {
  // Code here!
  return vegetables.reduce((highestRanked, input) =>
    input[metric] > highestRanked[metric] ? input : highestRanked
  ).submitter;
};
