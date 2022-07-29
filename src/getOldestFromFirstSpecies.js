const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldest = species.find((specie) =>
    specie.id === firstSpecie).residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
