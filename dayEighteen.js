//

const countTickets = tickets => {
  return tickets.reduce(
    (counts, color) => {
      counts[color] += 1;
      return counts;
    },
    { red: 0, green: 0, blue: 0 }
  );
};

const bestOdds = (tickets, raffleEntries) => {
  const count = countTickets(tickets);
  const colors = ["red", "green", "blue"];
  let best = { color: "red", probability: count["red"] / raffleEntries["red"] };

  for (const color of colors) {
    const probability = count[color] / raffleEntries[color];
    if (best.probability < probability) {
      best = { color, probability };
    }
  }
  return `You have the best odds of winning the ${best.color} raffle.`;
};
