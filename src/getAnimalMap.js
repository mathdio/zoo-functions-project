const data = require('../data/zoo_data');

function mapWithoutSex(options, location) {
  return data.species.filter((specie) => specie.location === location)
    .reduce((acc, specie) => {
      const { name, residents } = specie;
      const notSorted = residents.map((resident) => resident.name);
      if (options.sorted) {
        const sorted = notSorted.sort();
        const animal = { [name]: sorted };
        acc.push(animal);
        return acc;
      }
      const animal = { [name]: notSorted };
      acc.push(animal);
      return acc;
    }, []);
}

function mapWithSex(options, location) {
  return data.species.filter((specie) => specie.location === location)
    .reduce((acc, specie) => {
      const { name, residents } = specie;
      const notSorted = residents.filter((resident) => resident.sex === options.sex)
        .map((resident) => resident.name);
      if (options.sorted) {
        const sorted = notSorted.sort();
        const animal = { [name]: sorted };
        acc.push(animal);
        return acc;
      }
      const animal = { [name]: notSorted };
      acc.push(animal);
      return acc;
    }, []);
}

function getMap(options, location) {
  if (options.sex === undefined) {
    return mapWithoutSex(options, location);
  }
  return mapWithSex(options, location);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return {
      NE: data.species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
      NW: data.species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
      SE: data.species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
      SW: data.species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
    };
  }
  return {
    NE: getMap(options, 'NE'),
    NW: getMap(options, 'NW'),
    SE: getMap(options, 'SE'),
    SW: getMap(options, 'SW'),
  };
}

module.exports = getAnimalMap;
