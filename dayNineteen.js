//

const pumpkinSpice = money => {
  // pie, lattes, macarons, grams of spice
  let itemsBought = [0, 0, 0, 0];

  while (money >= 5) {
    itemsBought[0]++;
    itemsBought[3] += 30;
    money -= 5;
  }

  while (money >= 3) {
    itemsBought[1]++;
    itemsBought[3] += 15;
    money -= 3;
  }

  while (money >= 1) {
    itemsBought[2]++;
    itemsBought[3] += 3;
    money -= 1;
  }

  return itemsBought;
};
