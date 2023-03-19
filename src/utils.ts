import axios from "axios";
import { Message } from "discord.js";

export interface Command {
  callback(message: Message, ...args: string[]): void;
  description: string;
}

export interface CommandObject {
  [key: string]: Command;
}

export const getApiData = async <ResponseData>(
  url: string
): Promise<ResponseData> => {
  const response = await axios.get(url);
  return response.data;
};
