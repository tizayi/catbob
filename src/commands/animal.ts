import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: async (message: Message, args: string[]): Promise<void> => {
    const type = args[0];
    switch (type) {
      case "cat":
        getCatPic(message);
        break;
      case "fox":
        getFoxPic(message);
        break;
      case "dog":
        getDogPic(message);
        break;
      default:
        console.log("Animal not found!");
    }
  },
  description: "Catbob can fetch random images of animals.",
};

const getCatPic = (message: Message) => {
  axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      message.reply(`${response.data[0].url}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDogPic = (message: Message) => {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      message.reply(`${response.data.message}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFoxPic = (message: Message) => {
  axios
    .get("https://randomfox.ca/floof/?ref=apilist.fun")
    .then((response) => {
      message.reply(`${response.data.image}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default command;
