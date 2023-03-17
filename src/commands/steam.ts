import { Message } from "discord.js";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    const gamesArray: number[][] = await Promise.all(args.map(getOwnedGames));
    const result: number[] = gamesArray.reduce((a, b) =>
      a.filter((c) => b.includes(c))
    );
    const gameNames: string[] = await Promise.all(result.map(getGamename));
    message.reply(gameNames.join("\n"));
  },
};

type steamGame = {
  appid: number;
  playtime_forever: number;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  rtime_last_played: number;
};

async function getOwnedGames(userId: string): Promise<number[]> {
  const response = await axios.get(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${userId}&format=json`
  );
  const gamesList: number[] = response.data.response.games.map(
    (game: steamGame) => game.appid
  );
  return gamesList;
}

async function getGamename(gameId: number): Promise<string> {
  const response = await axios.get(
    `http://store.steampowered.com/api/appdetails?appids=${gameId}`
  );
  return response.data[gameId.toString()].data.name;
}