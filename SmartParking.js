// Challenge #10 - SmartParking
// The parking lot in the Codeville Devtropolis Shopping Mall needs an upgrade, and you've decided this is the perfect opportunity to install a smart parking system.

// The system will use special parking sensors to keep track of all parking spots and monitor which ones are available. Every time a vehicle enters the parking lot, the system directs them to an available spot for their particular vehicle type, or notifies them that no spots are available.

// Instructions
// We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

// There are three kinds of possible vehicles: regular cars, small cars, and motorcycles. Regular cars can only park in R spots. Small cars can park in R or S spots. Motorcycles can park in R, S, or M spots. In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

// Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

// Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

const whereCanIPark = (spots, vehicle) => {
  // Code here!
  const parking = {
    small: ["R", "S"],
    regular: ["R"],
    motorcycle: ["R", "M", "S"]
  };

  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      const spot = spots[i][j];
      if (parking[vehicle].includes(spot)) {
        return [j, i];
      }
    }
  }
  return false;
};
