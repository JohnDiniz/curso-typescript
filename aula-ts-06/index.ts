interface Game {
  id: number;
  platform: Platform;
  title: string;
  publisher: string;
  launch?: string | Date;
}

interface Platform {
  id: number;
  name: string;
}

const game: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14", // pode ser um Date. É opcional (para jogos ainda não lançados).
};

const games: Game[] = [game];

function play(game) {
  // runs the game
  console.log(game);
}

play(game);
