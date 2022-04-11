import {
  PersonDataSource,
} from '../datasource/personDataSource.js';

import {
  SportDataSource,
} from '../datasource/sportDataSource.js';

let dsPersons = new PersonDataSource();
let dsSports = new SportDataSource();

export const getPersons = (req, res) => {
  res.send(dsPersons.getPersons());
};

export const getPerson = (req, res) => {
  let foundPerson = dsPersons.getPerson(req.params.id);
  if (foundPerson === undefined) foundPerson = [];
  res.send(foundPerson);
};

export const createPerson = (req, res) => {
  console.log(req.body);

  dsPersons.createPerson(req.body);
  res.send(`Added new person named "${req.body.name}"`);
};

export const updatePerson = (req, res) => {
  dsPersons.updatePerson(req.params.id, req.body);
  res.send(`Person with id ${req.params.id} has been updated`);
};

export const deletePerson = (req, res) => {
  dsPersons.deletePerson(req.params.id);
  res.send(`Person with id ${req.params.id} has been deleted.`);
};

export const canParticipateIn = (req, res) => {
  let canParticipate = false;
  const foundPerson = dsPersons.getPerson(req.params.id);
  const foundSport = dsSports.getSport(req.params.sportId);

  if (foundPerson === undefined || foundSport === undefined) {
    canParticipate = {};
  } else {
    const caloriesBurntInSportEvent = foundSport.caloriesBurntByMinuteByAthlete *
        foundSport.duration;
    const maxCaloriesCanBurn = dsPersons.maxCaloriesCanBurn(foundPerson);

    if (maxCaloriesCanBurn <= caloriesBurntInSportEvent) {
      canParticipate = true;
    }
  }

  res.send(canParticipate);
};