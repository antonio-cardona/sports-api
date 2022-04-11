import {ActivityLevel} from '../models/activityLevel.js';
import {v4 as uuidv4} from 'uuid';

export class ActivityLevelDataSource {
  // Data Repository / Dabatase Simulation.
  activityLevels = [
    new ActivityLevel(
        "51d8be6c-ca2e-44fd-89ed-0c854b09c32d",
        'No exercise',
        1.2,
        'A person who does little to no exercise.',
    ),
    new ActivityLevel(
        "590f9a4c-01a7-4f9e-8d9c-8720976b5d1c",
        'Slightly active',
        1.37,
        'A slightly active person who does light exercise 1–3 days a week.',
    ),
    new ActivityLevel(
        "0072ebd5-bbbb-490f-9ded-5e147c4f803f",
        'Moderately active',
        1.55,
        'A moderately active person who performs moderate exercise 3–5 days a week.',
    ),
    new ActivityLevel(
        "31bec39a-d8ef-4905-97b1-c68a6cdae547",
        'Active',
        1.725,
        'A very active person who exercises hard 6–7 days a week.',
    ),
    new ActivityLevel(
        "c68a6cdae547-31bec39a-d8ef-4905",
        'Extra active',
        1.9,
        'An extra active person who either has a physically demanding job or has a particularly challenging exercise routine.',
    ),
  ];

  getActivities() {
    let list = new Array();
    this.activityLevels.forEach((activity) => {
      list.push({
        id: activity.id,
        name: activity.name,
        points: activity.points,
        description: activity.description
      });
    });
    return list;
  }

  getActivity(id) {
    let activityFound = {};
    this.activityLevels.forEach((activity) => {
      if (activity.id === id) activityFound = {
        id: activity.id,
        name: activity.name,
        points: activity.points,
        description: activity.description
      };
    });
    return activityFound;
  }

  createActivity(activityLevel) {}

  updateActivity(activityLevel) {}

  deleteActivity(id) {}
}