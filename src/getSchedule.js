const data = require('../data/zoo_data');

const arrayWeekDays = ['Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const arrayAnimals = ['lions',
  'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];

function getDaySchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${data.hours[scheduleTarget]
        .open}am until ${data.hours[scheduleTarget].close}pm`,
      exhibition: data.species.filter((specie) =>
        specie.availability.includes(scheduleTarget)).map((specie) => specie.name),
    },
  };
}

function getWeekSchedule() {
  const weekSchedule = {};
  arrayWeekDays.forEach((day) => {
    if (day === 'Monday') {
      weekSchedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      weekSchedule[day] = {
        officeHour: `Open from ${data.hours[day]
          .open}am until ${data.hours[day].close}pm`,
        exhibition: data.species.filter((specie) =>
          specie.availability.includes(day)).map((specie) => specie.name),
      };
    }
  });
  return weekSchedule;
}

function getSchedule(scheduleTarget) {
  if (arrayWeekDays.includes(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
  if (scheduleTarget === undefined
    || (!arrayAnimals.includes(scheduleTarget) && !arrayWeekDays.includes(scheduleTarget))) {
    return getWeekSchedule();
  }
  return data.species.find((specie) => specie.name === scheduleTarget).availability;
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
