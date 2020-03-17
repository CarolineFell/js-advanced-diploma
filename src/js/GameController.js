import GamePlay from './GamePlay';
import themes from './themes';
import GameState from './GameState';
import utils from './utils';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.gameState = new GameState();
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    this.gamePlay.drawUi(this.gameState.theme);

  //     /**
  //  * Add listener to mouse click for cell
  //  *
  //  * @param callback
  //  */
  // addCellClickListener(callback) {
  //   this.cellClickListeners.push(callback);
  // }

  // /**
  //  * Add listener to "New Game" button click
  //  *
  //  * @param callback
  //  */
  // addNewGameListener(callback) {
  //   this.newGameListeners.push(callback);
  // }

  // /**
  //  * Add listener to "Save Game" button click
  //  *
  //  * @param callback
  //  */
  // addSaveGameListener(callback) {
  //   this.saveGameListeners.push(callback);
  // }

  // /**
  //  * Add listener to "Load Game" button click
  //  *
  //  * @param callback
  //  */
  // addLoadGameListener(callback) {
  //   this.loadGameListeners.push(callback);
  // }

  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
