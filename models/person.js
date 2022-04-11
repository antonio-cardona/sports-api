export class Person {
  #_id;
  #_name;
  #_age;
  #_weight;
  #_height;
  #_activityLevel;
  #_sex;

  constructor(id, name, age, weight, height, activityLevel, sex) {
    this.#_id = id;
    this.#_name = name;
    this.#_age = age;
    this.#_weight = weight;
    this.#_height = height;
    this.#_activityLevel = activityLevel;
    this.#_sex = sex;
  }

  get id() {
    return this.#_id;
  }

  set id(value) {
    this.#_id = value;
  }

  get sex() {
    return this.#_sex;
  }

  set sex(value) {
    this.#_sex = value;
  }

  get activityLevel() {
    return this.#_activityLevel;
  }

  set activityLevel(value) {
    this.#_activityLevel = value;
  }

  get height() {
    return this.#_height;
  }

  set height(value) {
    this.#_height = value;
  }

  get weight() {
    return this.#_weight;
  }

  set weight(value) {
    this.#_weight = value;
  }

  get name() {
    return this.#_name;
  }

  set name(value) {
    this.#_name = value;
  }

  get age() {
    return this.#_age;
  }

  set age(value) {
    this.#_age = value;
  }
}