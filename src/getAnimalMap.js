const data = require('../data/zoo_data');

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
    NE: data.species.filter((specie) => specie.location === 'NE').reduce((acc, specie) => {
      const { name } = specie;
      const animal = {
        [name]: specie.residents.filter((resident) => resident.sex === options.sex).map((resident) => resident.name),
      };
      acc.push(animal);
      return acc;
    }, []),
  };
}
console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
