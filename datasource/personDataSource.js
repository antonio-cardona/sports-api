import {Person} from '../models/person.js';
import {v4 as uuidv4} from 'uuid';
import {ActivityLevelDataSource} from './activityLevelDataSource.js';

export class PersonDataSource {
  // Data Repository / Dabatase Simulation.
  persons = [];

  getPersons() {
    let list = new Array();
    this.persons.forEach((person) => {
      list.push({
        id: person.id,
        name: person.name,
        age: person.age,
        weight: person.weight,
        height: person.height,
        activityLevel: person.activityLevel,
        sex: person.sex,
      });
    });
    return list;
  }

  getPerson(id) {
    let personFound = {};
    this.persons.forEach((person) => {
      if (person.id === id) personFound = {
        id: person.id,
        name: person.name,
        age: person.age,
        weight: person.weight,
        height: person.height,
        activityLevel: person.activityLevel,
        sex: person.sex,
      };
    });
    return personFound;
  }

  createPerson(person) {
    this.persons.push(new Person(
        uuidv4(),
        person.name,
        person.age,
        person.weight,
        person.height,
        person.activityLevel,
        person.sex,
    ));
  }

  updatePerson(id, body) {
    const {name, age, weight, height, activityLevel, sex} = body;
    let personFound = this.persons.find((person) => person.id === id);

    if (name) personFound.name = name;
    if (age) personFound.age = age;
    if (weight) personFound.weight = weight;
    if (height) personFound.height = height;
    if (activityLevel) personFound.activityLevel = activityLevel;
    if (sex) personFound.sex = sex;
  }

  deletePerson(id) {
    this.persons = this.persons.filter((person) => person.id !== id);
  }

  maxCaloriesCanBurn(person) {
    let maxCalories;
    let dsActivity = new ActivityLevelDataSource();

    // First calculate the Basal Metabolic Rate (BMR).
    if (person.sex === 'M') {
      maxCalories = 66 + (6.2 * person.weight) + (12.7 * person.height) -
          (6.76 * person.age);
    } else {
      maxCalories = 65.1 + (4.35 * person.weight) + (4.7 * person.height) -
          (4.7 * person.age);
    }

    // Then get the average Activity Level Points.
    const activity = dsActivity.getActivity(person.activityLevel);

    return maxCalories * activity.points;
  }
}