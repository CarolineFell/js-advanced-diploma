import Bowman from '../classes/bowman';
import Swordsman from '../classes/swordsman';
import Magician from '../classes/magician';
import Undead from '../classes/undead';
import Vampire from '../classes/vampire';
import Daemon from '../classes/daemon';
import Character from '../Character';

const bowman = new Bowman(5);
const swordsman = new Swordsman(10);
const magician = new Magician(1);
const undead = new Undead(15);
const vampire = new Vampire(30);
const daemon = new Daemon(22);

test('Should throw Error', () => {
  expect(() => new Character(100)).toThrow('Creating the class new Character(level) is forbidden');
});

test('Should be bowman(5, 25, 25, 100, "generic", null, null, null)', () => {
  bowman.health = 100;
  expect(bowman).toEqual({
    level: 5,
    attack: 25,
    defence: 25,
    health: 100,
    type: 'generic',
    maxHealth: null,
    moveRadius: null,
    attackRadius: null,
  });
});

test('Should be swordsman(10, 40, 10, 50, "generic", null, null, null)', () => {
  swordsman.health = 50;
  expect(swordsman).toEqual({
    level: 10,
    attack: 40,
    defence: 10,
    health: 50,
    type: 'generic',
    maxHealth: null,
    moveRadius: null,
    attackRadius: null,
  });
});

test('Should be magician(4, 20, 50, 60, "generic", null, null, null)', () => {
  magician.level = 4;
  magician.attack = 20;
  magician.defence = 50;
  magician.health = 60;
  expect(magician).toEqual({
    level: 4,
    attack: 20,
    defence: 50,
    health: 60,
    type: 'generic',
    maxHealth: null,
    moveRadius: null,
    attackRadius: null,
  });
});

test('Should be undead(15, 25, 25, 50, "wow", null, null, null)', () => {
  undead.health = 100;
  undead.type = 'wow';
  expect(undead).toEqual({
    level: 15,
    attack: 25,
    defence: 25,
    health: 100,
    type: 'wow',
    maxHealth: null,
    moveRadius: null,
    attackRadius: null,
  });
});

test('Should be vampire(30, 40, 10, 50, "generic", null, null, null)', () => {
  expect(vampire).toEqual({
    level: 30,
    attack: 40,
    defence: 10,
    health: 50,
    type: 'generic',
    maxHealth: null,
    moveRadius: null,
    attackRadius: null,
  });
});

test('Should be daemon(22, 10, 40, 50, "generic", null, null, null)', () => {
  expect(daemon).toEqual({
    level: 22,
    attack: 10,
    defence: 40,
    health: 50,
    type: 'generic',
    maxHealth: null,
    moveRadius: null,
    attackRadius: null,
  });
});