import Character from './Character';

export default class Team {
  constructor(player, allowedTypes) {
    this.player = player;
    this.allowedTypes = allowedTypes;
    this.characters = new Set();
    this.points = 0;

    if (new.target.name === 'Team') {
      throw new Error('User use <new Team()>');
    }
  }

  set characters(characters) {
    this.characters.clear();
    characters.forEach((character) => {
      this.characters.add(character);
    });
  }

  get characters() {
    return Array.from(this.characters);
  }

  get charactersCount() {
    return this.characters.size;
  }

  get livingCharacters() {
    return this.characters.filter((character) => character.isLiving());
  }

  get livingCharactersCount() {
    return this.characters.reduce((count, character) => {
      // eslint-disable-next-line no-param-reassign
      if (character.isLiving()) count += 1;
      return count;
    }, 0);
  }

  addCharacter(character) {
    if (!(character instanceof Character)) {
      throw new Error('Character must be instance of Character or its children');
    }
    this.characters.add(character);
  }

  addCharacters(characters) {
    characters.forEach((character) => this.addCharacter(character));
  }

  charactersLevelUp() {
    this.characters.forEach((character) => {
      if (character.isLiving()) {
        character.restoreHealth();
        character.levelUp();
      }
    });
  }

  calcPoints() {
    this.points = this.characters.reduce((points, character) => {
      // eslint-disable-next-line no-param-reassign
      if (character.isLiving()) points += character.health;
      return points;
    }, this.points);
  }
}