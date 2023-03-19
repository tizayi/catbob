import { Message, ThreadAutoArchiveDuration } from "discord.js";
import axios from "axios";
import * as dotenv from "dotenv";
import fs from "fs";
import { Command, getApiData } from "../utils";
import Insult, { InsultData } from "./insult";

const USER_FILE_PATH = "./src/commands/steam-users/users.json";

dotenv.config();

interface steamGame {
  appid: number;
  playtime_forever: number;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  rtime_last_played: number;
}

interface SteamUser {
  name: string;
  user_id: string;
}

const userArrayWrite = (users: SteamUser[] = []): void => {
  fs.writeFileSync(USER_FILE_PATH, JSON.stringify(users));
};

const readUserArray = (): SteamUser[] => {
  const jsonString = fs.readFileSync(USER_FILE_PATH).toString();
  return JSON.parse(jsonString);
};

const showUsers = (): string => {
  const currentUsers = readUserArray();
  return JSON.stringify(currentUsers);
};

const addUser = (newUser: SteamUser) => {
  const currentUsers = readUserArray();
  if (currentUsers.includes(newUser)) {
    return;
  } else {
    const newArray = [...currentUsers, newUser];
    userArrayWrite(newArray);
  }
};


const isValidSteamId = (steamId: string): boolean => {
  if(steamId.length !== 17 || parseInt(steamId)){
    return false;
  }
  return true
}

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    for(let string in args){
    if(!isValidSteamId(string)){
      Insult.callback(message)
      message.reply("Not a valid Id");
      const data = await getApiData<InsultData>(
        "https://evilinsult.com/generate_insult.php?lang=en&type=json"
      );
      message.channel.send(data.insult)
      continue
    }
  }
    
    const gamesArray: number[][] = await Promise.all(args.map(getOwnedGames));
    const result: number[] = gamesArray.reduce((a, b) =>
      a.filter((c) => b.includes(c))
    );
    const gameNames: string[] = await Promise.all(result.map(getGamename));
    message.reply(gameNames.join("\n"));
  },
  description: "Catbob can do steam things (WIP)",
};

export default command;

const getOwnedGames = async (userId: string): Promise<number[]> => {
  const response = await axios.get(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${userId}&format=json`
  );
  const gamesList: number[] = response.data.response.games.map(
    (game: steamGame) => game.appid
  );
  return gamesList;
}

const getGamename = async (gameId: number): Promise<string> => {
  const response = await axios.get(
    `http://store.steampowered.com/api/appdetails?appids=${gameId}`
  );
  let result = "Bad game";
  try{
    result = response.data[gameId.toString()].data.name
  } catch (error){
    console.log(gameId)
    console.log(response.data[gameId.toString()].data)
  }
  return result
}
