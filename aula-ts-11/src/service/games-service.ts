import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

function createGame(game: Game) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

function gameAlreadyExists(game: Game): boolean {
  const result = gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;