import { Message } from "discord.js";
import axios from "axios";
import * as dotenv from "dotenv";
import { Command } from "../utils";

dotenv.config();

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    const gamesArray: number[][] = await Promise.all(args.map(getOwnedGames));
    const result: number[] = gamesArray.reduce((a, b) =>
      a.filter((c) => b.includes(c))
    );
    const gameNames = await Promise.all(result.map(getGameName));
    message.reply(gameNames.join("\n"));
  },
  description: "Catbob can do steam things (WIP)",
};

export default command;

const getOwnedGames = async (userId: string): Promise<number[]> => {
  const UserResponse = await axios.get(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${userId}&format=json`
  );
  const gamesList: number[] = UserResponse.data.response.games.map(
    (game: any) => game.appid
  );
  return gamesList;
};

const getGameName = async (gameId: number): Promise<string> => {
  const response = await axios
    .get(
      `http://store.steampowered.com/api/appdetails?appids=${gameId.toString()}`
    )
    .catch((err) => console.log(`[${gameId}]:${err}`));
  setTimeout(() => console.log("Small wait in API calls"), 100);
  if (response) {
    return response.data[gameId.toString()].data.name;
  } else {
    return "";
  }
};
