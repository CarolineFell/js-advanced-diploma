import Team from '../Team';
import Undead from './undead';
import Vampire from './vampire';
import Daemon from './daemon';

export default class Computer extends Team {
  constructor() {
    super('computer', [Daemon, Undead, Vampire]);
  }
}