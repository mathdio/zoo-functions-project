const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = data.hours
  if (scheduleTarget.endsWith('day')) {
    const schedule = {};
    // const animals = data.species.filter((specie) => specie.availability.includes(scheduleTarget)).name;
    schedule[scheduleTarget] = {
      officeHour:
      `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
      exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
    };
    console.log(schedule);
    return schedule;
  }
  return data.species.find((specie) => specie.name === scheduleTarget).availability;
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
