import { Game } from "./types/Game";

const game: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14", // pode ser um Date. também pode ser vazio
};

const game2: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "xbox",
  },
  title: "The Halo",
  publisher: "microsoft",
  launch: "2013-06-14", // pode ser um Date. também pode ser vazio
};

const games: Game[] = [game, game2];

function play(game: Game) {
  console.log(game);
}

// play(game);

console.log(games); // Acessa os jogos no array
