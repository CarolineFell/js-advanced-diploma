import Team from '../Team';
import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';

export default class User extends Team {
  constructor() {
    super('user', [Swordsman, Bowman, Magician]);
  }
}