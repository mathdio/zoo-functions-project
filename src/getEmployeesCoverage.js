const data = require('../data/zoo_data');

function getSpecies(employeeInfo) {
  const animalsName = employeeInfo.responsibleFor.map((animalId) =>
    data.species.find((specie) => specie.id === animalId).name);
  return animalsName;
}

function getLocations(employeeInfo) {
  const animalsLocation = employeeInfo.responsibleFor.map((animalId) =>
    data.species.find((specie) => specie.id === animalId).location);
  return animalsLocation;
}

function getEmployee(employeeObj) {
  let employeeInfo;
  if (employeeObj === undefined) {
    employeeInfo = data.employees.map((employee) => employee);
    return employeeInfo;
  }
  if (employeeObj.name === undefined) {
    employeeInfo = data.employees.find((employee) => employee.id === employeeObj.id);
  }
  if (employeeObj.id === undefined) {
    employeeInfo = data.employees.find((employee) =>
      employee.firstName === employeeObj.name || employee.lastName === employeeObj.name);
  }
  if (employeeInfo === undefined) {
    throw Error('Informações inválidas');
  }
  return employeeInfo;
}

function getEmployeesCoverage(employeeObj) {
  getEmployee(employeeObj);
  if (employeeObj === undefined) {
    return getEmployee(employeeObj).map((employee) => ({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpecies(employee),
      locations: getLocations(employee),
    }));
  }
  if (employeeObj !== undefined) {
    const coverage = {
      id: getEmployee(employeeObj).id,
      fullName: `${getEmployee(employeeObj).firstName} ${getEmployee(employeeObj).lastName}`,
      species: getSpecies(getEmployee(employeeObj)),
      locations: getLocations(getEmployee(employeeObj)),
    };
    return coverage;
  }
}

module.exports = getEmployeesCoverage;
