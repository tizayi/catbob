import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";
import { animalApiLibrary, AnimalApi } from "../utils";

const command: Command = {
  callback: async (message: Message, args: string[]) => {
    const type = args[0];
    const animalList = Object.keys(animalApiLibrary);
    if (animalList.includes(type)) {
      getAnimal(message, animalApiLibrary[type]);
    } else {
      message.reply(
        `(${type}) is not implemented try these animals instead: ${animalList.join(
          ", "
        )}`
      );
    }
  },
  description: `Catbob can fetch random images of animals. {${Object.keys(
    animalApiLibrary
  ).join(", ")}}`,
};

const getAnimal = (message: Message, animalApi: AnimalApi) => {
  axios
    .get(animalApi.api)
    .then((response) => {
      let result;
      if (Array.isArray(response.data)) {
        result = response.data[0];
      } else {
        result = response.data;
      }
      message.reply(`${result[animalApi.data_access]}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default command;
