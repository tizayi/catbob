import { Client, Collection } from "discord.js";

export interface CommandType {
  [key: string]: any;
}

export interface BotCommand {
  data: any;
  execute: any;
}
