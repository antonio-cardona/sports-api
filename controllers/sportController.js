import {
  SportDataSource,
} from '../datasource/sportDataSource.js';

let dsSports = new SportDataSource();

export const getSports = (req, res) => {
  res.send(dsSports.getSports());
};

export const getSport = (req, res) => {
  const sportId = req.params.id;
  let foundSport = dsSports.getSport(sportId);
  if (foundSport === undefined) foundSport = [];
  res.send(foundSport);
};

export const createSport = (req, res) => {
  console.log(req.body);
  dsSports.createSport(req.body);
  res.send(`Added new sport named "${req.body.name}"`);
};

export const updateSport = (req, res) => {
  dsSports.updateSport(req.params.id, req.body);
  res.send(`Sport with id ${req.params.id} has been updated`);
};

export const deleteSport = (req, res) => {
  dsSports.deleteSport(req.params.id);
  res.send(`Sport with id ${req.params.id} has been deleted.`);
};