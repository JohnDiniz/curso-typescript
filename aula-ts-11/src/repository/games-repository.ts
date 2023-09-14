import { Game } from "../protocols/game-protocol";

const games: Game[] = [];

function getGames() {
  return games;
}

function createGame(game: Game) {
  games.push(game);
}

function getGameByTitleAndPlatform(game: Game) {
  return games.find(({ title, platform }) => {
    return game.title === title && game.platform === platform;
  });
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
