const data = require('../data/zoo_data');

function countAnimals(animal) {
  return data.species.reduce((acc, specie) => {
    const { name, residents } = specie;
    if (animal === undefined) {
      acc[name] = residents.length;
      return acc;
    }
    if (name === animal.specie) {
      if (animal.sex !== undefined) {
        return residents.filter((resident) => resident.sex === animal.sex).length;
      }
      return residents.length;
    }
    return acc;
  }, {});
}

module.exports = countAnimals;
