import Character from '../Character';

export default class Undead extends Character {
  constructor(level) {
    super(level);
    this.attack = 25;
    this.defence = 25;
  }
}