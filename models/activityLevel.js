export class ActivityLevel {
  #_id;
  #_name;
  #_points;
  #_description;

  get description() {
    return this.#_description;
  }

  set description(value) {
    this.#_description = value;
  }

  get points() {
    return this.#_points;
  }

  set points(value) {
    this.#_points = value;
  }

  get name() {
    return this.#_name;
  }

  set name(value) {
    this.#_name = value;
  }

  get id() {
    return this.#_id;
  }

  set id(value) {
    this.#_id = value;
  }

  constructor(id, name, points, description) {
    this.#_id = id;
    this.#_name = name;
    this.#_points = points;
    this.#_description = description;
  }
}