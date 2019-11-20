//

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  // Code here!
  let baseTicketPrice = 1 + distanceTraveled * 0.25;
  return numberOfPeople >= 30
    ? `$${(0.25 + baseTicketPrice).toFixed(2)}`
    : `$${baseTicketPrice.toFixed(2)}`;
};
