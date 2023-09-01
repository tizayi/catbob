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

export const gameShowApi = "https://the-trivia-api.com/api/questions";
export const complimentApi = "https://complimentr.com/api";
export const insultApi =
  "https://evilinsult.com/generate_insult.php?lang=en&type=json";
export const rizzApi = "https://vinuxd.vercel.app/api/pickup";
export const tarotApi = "https://tarot-api.onrender.com/api/v1/cards/random";

export interface AnimalApi {
  api: string;
  data_access: string;
}

export const animalApiLibrary: { [key: string]: AnimalApi } = {
  cat: {
    api: "https://api.thecatapi.com/v1/images/search",
    data_access: "url",
  },
  dog: {
    api: "https://dog.ceo/api/breeds/image/random",
    data_access: "message",
  },
  fox: {
    api: "https://randomfox.ca/floof/?ref=apilist.fun",
    data_access: "image",
  },
  frog: {
    api: "https://generatorfun.com/random-frog-image",
    data_access: "image",
  },
};

export interface Card {
  cardName: string;
  meaningUp: string;
}
