import GamePlay from '../GamePlay';
import GameStateService from '../GameStateService';
import GameController from '../GameController';
import loadMock from '../mock-consts';

document.body.innerHTML = '<div id="game-container"></div>';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameController = new GameController(gamePlay, stateService);
gameController.init();

jest.mock('../GameStateService');

test('Should successfully load the game', () => {
  gameController.stateService.load.mockReturnValue(loadMock);
  expect(gameController.onLoadGame()).toBe(true);
});

test('Should failed during loading the game', () => {
  gameController.stateService.load.mockImplementation(() => {
    Error('Invalid state');
  });
  expect(gameController.onLoadGame()).toBe(false);
});