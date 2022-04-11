import {Sport} from '../models/sport.js';
import {v4 as uuidv4} from 'uuid';
import {Person} from '../models/person.js';

export class SportDataSource {
  // Data Repository / Dabatase Simulation.
  sports = [
    new Sport(
        uuidv4(),
        'Soccer',
        24,
        90,
        100,
        true,
        '',
    ),
    new Sport(
        uuidv4(),
        'Basketball',
        10,
        48,
        90,
        true,
        '',
    ),
    new Sport(
        uuidv4(),
        'Running',
        0,
        42,
        90,
        false,
        'Marathon',
    ),
    new Sport(
        uuidv4(),
        'Running',
        0,
        10,
        90,
        false,
        '10K',
    ),
  ];

  getSports() {
    let list = new Array();
    this.sports.forEach((sport) => {
      list.push({
        id: sport.id,
        name: sport.name,
        players: sport.players,
        duration: sport.duration,
        caloriesBurntByMinuteByAthlete: sport.caloriesBurntByMinuteByAthlete,
        totalEffort: sport.totalEffort,
        playedInGroup: sport.playedInGroup,
        detail: sport.detail,
      });
    });
    return list;
  }

  getSport(id) {
    let sportFound = {};
    this.sports.forEach((sport) => {
      if (sport.id === id) sportFound = {
        id: sport.id,
        name: sport.name,
        players: sport.players,
        duration: sport.duration,
        caloriesBurntByMinuteByAthlete: sport.caloriesBurntByMinuteByAthlete,
        totalEffort: sport.totalEffort,
        playedInGroup: sport.playedInGroup,
        detail: sport.detail,
      };
    });
    return sportFound;
  }

  createSport(sport) {
    this.sports.push(new Sport(
        uuidv4(),
        sport.name,
        sport.players,
        sport.duration,
        sport.caloriesBurntByMinuteByAthlete,
        sport.playedInGroup,
        sport.detail,
    ));
  }

  updateSport(id, body) {
    const {
      name,
      players,
      duration,
      caloriesBurntByMinuteByAthlete,
      playedInGroup,
      detail,
    } = body;
    let sportFound = this.sports.find((sport) => sport.id === id);

    if (name) sportFound.name = name;
    if (players) sportFound.players = players;
    if (duration) sportFound.duration = duration;
    if (caloriesBurntByMinuteByAthlete) sportFound.caloriesBurntByMinuteByAthlete = caloriesBurntByMinuteByAthlete;
    if (playedInGroup) sportFound.playedInGroup = playedInGroup;
    if (detail) sportFound.detail = detail;
    if (players || duration) {
      sportFound.totalEffort = sportFound.duration * sportFound.players;
    }
  }

  deleteSport(id) {
    this.sports = this.sports.filter((sport) => sport.id !== id);
  }
}