import emoji from './emoji';

export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    this.maxHealth = null;
    this.moveRadius = null;
    this.attackRadius = null;

    // TODO: throw error if user use "new Character()"
    if (new.target.name === 'Character') {
      throw new Error('Creating the class new Character(level) is forbidden');
    }
  }

  get message() {
    const level = `${emoji.medal} ${this.level} `;
    const attack = `${emoji.swords} ${this.attack} `;
    const defence = `${emoji.shield} ${this.defence} `;
    const health = `${emoji.heart} ${this.health}`;
    return level + attack + defence + health;
  }

  levelUp() {
    this.level += 1;
    this.attack = Math.round(Math.max(this.attack, this.attack * (1.8 - this.health / 100)));

    if ((this.level + 80) <= 100) {
      this.health = this.level + 80;
      return this.health;
    }
    this.health = 100;
    return this.health;
  }

  restoreHealth() {
    this.health = this.maxHealth;
  }

  isLiving() {
    return (this.health > 0);
  }
}