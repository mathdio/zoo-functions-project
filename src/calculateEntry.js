const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
      return acc;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      acc.adult += 1;
      return acc;
    }
    acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantObject = countEntrants(entrants);
  const amount = (entrantObject.child * data.prices.child)
    + (entrantObject.adult * data.prices.adult)
    + (entrantObject.senior * data.prices.senior);
  return amount;
}

module.exports = { calculateEntry, countEntrants };
