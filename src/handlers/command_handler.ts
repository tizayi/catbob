import { Message } from "discord.js";
import { prefix } from "..";
import { getAPI } from "../utils/api";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export function handleCommands(message: Message): void {
  const args: string[] = message.content.slice(prefix.length).split(/ +/);
  const command: string = args.shift()!.toLowerCase();

  switch (command) {
    case "hello":
      message.reply("Welcome to robot hell.");
      break;
    case "ping":
      message.reply("pong");
      break;
    case "steam":
      steamGameCompare(message, args);
    default:
      message.reply("I don't understand");
  }
}

export function basedHandler(message: Message): void {
  if (message.author.id === "183691593562193920") {
    message.reply("based");
  } else {
    message.reply("Not based");
  }
}

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

async function steamGameCompare(message: Message, idList: string[]) {
  const gamesArray: number[][] = await Promise.all(idList.map(getOwnedGames));
  const result: number[] = gamesArray.reduce((a, b) =>
    a.filter((c) => b.includes(c))
  );
  const gameNames: string[] = await Promise.all(result.map(getGamename));
  message.reply(gameNames.join("\n"));
}

async function getGamename(gameId: number): Promise<string> {
  const response = await axios.get(
    `http://store.steampowered.com/api/appdetails?appids=${gameId}`
  );
  return response.data[gameId.toString()].data.name;
}
