import { Message } from "discord.js";
import axios from "axios";

export interface CommandType {
  [key: string]: any;
}

export interface BotCommand {
  data: any;
  execute: any;
}

export const getApiData = async <ResponseData>(
  url: string
): Promise<ResponseData> => {
  const response = await axios.get(url);
  return response.data;
};
