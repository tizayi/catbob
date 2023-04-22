import { Message } from "discord.js";

export interface Command {
  callback(message: Message, args: string[]): void;
  description: string;
}

export interface CommandObject {
  [key: string]: Command;
}

export const hashCode = (input: string): number => {
  return input.split("").reduce((a: number, b: string): number => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};
