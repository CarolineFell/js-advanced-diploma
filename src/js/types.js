import Bowman from './classes/bowman';
import Swordsman from './classes/swordsman';
import Magician from './classes/magician';
import Undead from './classes/undead';
import Vampire from './classes/vampire';
import Daemon from './classes/daemon';

const CharacterTypes = {
  bowman: Bowman,
  daemon: Daemon,
  magician: Magician,
  swordsman: Swordsman,
  vampire: Vampire,
  undead: Undead,
};

export default CharacterTypes;