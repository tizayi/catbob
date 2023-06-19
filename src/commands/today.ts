import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";
import { tarotApi } from "../utils";

type Card = {
  cardName: string;
  meaningUp: string;
};

const command: Command = {
  callback: async (message: Message, args: string[]): Promise<void> => {
    axios
      .get(tarotApi)
      .then((response) => {
        const cardData = response.data.cards;
        const cards: Card[] = cardData.map((card: any) => {
          return {
            cardName: card.name,
            meaningUp: card.meaning_up,
          };
        });
        const cardStrings = cards.map((card: Card) => {
          return `card: ${card.cardName}\n meaning: ${card.meaningUp} \n\n`;
        });
        const cardType = ["thoughts", "feelings", "what you will be doing"];
        for (let i = 0; i < 3; i++) {
          message.reply(`${cardType[i]} \n ${cardStrings[i]}`);
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  },
  description: "Your future !!!",
};

export default command;
