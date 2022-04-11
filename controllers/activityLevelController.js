import {
  ActivityLevelDataSource,
} from '../datasource/activityLevelDataSource.js';

let dsActivities = new ActivityLevelDataSource();

export const getActivities = (req, res) => {
  res.send(dsActivities.getActivities());
};

export const getActivity = (req, res) => {
  const activityId = req.params.id;
  let foundActivity = dsActivities.getActivity(activityId);
  if (foundActivity === undefined) foundActivity = [];
  res.send(foundActivity);
};

export const createActivity = (req, res) => {
  /* const user = req.body;
   const newId = uuidv4();
   persons.push({
     id: newId,
     ...user,
   });

   res.send(`Added new user named "${user.firstName}" width id: ${newId}`);
   */
};

export const deleteActivity = (req, res) => {
  //const userId = req.params.#id;
  //persons = persons.filter((user) => user.id !== userId);
  //res.send(`User with id ${userId} deleted.`);
};

export const updateActivity = (req, res) => {
  //const userId = req.params.#id;
  //const {firstName, secondName, age} = req.body;

  //const user = persons.find((user) => user.id === userId);
  /*
    if (firstName) user.firstName = firstName;
    if (secondName) user.secondName = secondName;
    if (age) user.age = age;

    res.send(`User with id ${userId} has been updated`);
   */
};
