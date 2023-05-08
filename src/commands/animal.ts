import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";

interface AnimalApi {
  api: string;
  data_access: string;
}

const apiLibrary: { [key: string]: AnimalApi } = {
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
  panda: { api: "https://some-random-api.ml/img/panda", data_access: "link" },
  koala: { api: "https://some-random-api.ml/img/koala", data_access: "link" },
};

const command: Command = {
  callback: async (message: Message, args: string[]) => {
    const type = args[0];
    const animalList = Object.keys(apiLibrary);
    if (animalList.includes(type)) {
      getAnimal(message, apiLibrary[type]);
    } else {
      message.reply(
        `(${type}) is not implemented try these animals instead: ${animalList.join(
          ", "
        )}`
      );
    }
  },
  description: `Catbob can fetch random images of animals. {${Object.keys(
    apiLibrary
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
