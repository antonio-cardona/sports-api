export class Sport {
  #_id;
  #_name;
  #_players;
  #_duration;
  #_caloriesBurntByMinuteByAthlete;
  #_totalEffort;
  #_playedInGroup;
  #_detail;

  constructor(
      id,
      name,
      players,
      duration,
      caloriesBurntByMinuteByAthlete,
      playedInGroup,
      detail,
  ) {
    this.#_id = id;
    this.#_duration = duration;
    this.#_caloriesBurntByMinuteByAthlete = caloriesBurntByMinuteByAthlete;
    this.#_totalEffort = duration * players;
    this.#_playedInGroup = playedInGroup;
    this.#_detail = detail;
    this.#_players = players;
    this.#_name = name;
  }

  get id() {
    return this.#_id;
  }

  set id(value) {
    this.#_id = value;
  }

  get name() {
    return this.#_name;
  }

  set name(value) {
    this.#_name = value;
  }

  get players() {
    return this.#_players;
  }

  set players(value) {
    this.#_players = value;
  }

  get detail() {
    return this.#_detail;
  }

  set detail(value) {
    this.#_detail = value;
  }

  get playedInGroup() {
    return this.#_playedInGroup;
  }

  set playedInGroup(value) {
    this.#_playedInGroup = value;
  }

  get totalEffort() {
    return this.#_totalEffort;
  }

  get caloriesBurntByMinuteByAthlete() {
    return this.#_caloriesBurntByMinuteByAthlete;
  }

  set caloriesBurntByMinuteByAthlete(value) {
    this.#_caloriesBurntByMinuteByAthlete = value;
  }

  get duration() {
    return this.#_duration;
  }

  set duration(value) {
    this.#_duration = value;
  }
}