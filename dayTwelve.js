//

const checkAir = function(samples, threshold) {
  const dirtyCount = samples.filter(sample => sample === "dirty").length;
  return dirtyCount / samples.length < threshold ? "Clean" : "Polluted";
};
