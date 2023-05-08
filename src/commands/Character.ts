import { Message } from "discord.js";
import { Command } from "../utils";

// first off always lowercase unless you are defining a type, interface or class

// Interfaces and types are a typescipt thing they help spot bugs by enforcing strict typing
interface Character {
  class: string;
  race: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

// you were right here
const classSelection = [
  "Barbarin",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rouge",
  "Sorcerer",
  "Warlock",
  "Wizard",
];
const raceSelection = [
  "Dwarf",
  "Elf",
  "Halfling",
  "Human",
  "Dragonborn",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Tiefling",
];

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const character = createCharacter();
    message.reply(printCharacter(character));
  },
  description: "Make a d and d character with random stats",
};

export default command;

// js has no integer type everthing is a floating point number so Math.floor is needed for integers
const createCharacter = (): Character => {
  return {
    class: classSelection[Math.floor(Math.random() * classSelection.length)],
    race: raceSelection[Math.floor(Math.random() * raceSelection.length)],
    strength: Math.floor(Math.random() * (18 - 3)) + 3,
    dexterity: Math.floor(Math.random() * (18 - 3)) + 3,
    constitution: Math.floor(Math.random() * (18 -3 )) + 3,
    intelligence: Math.floor(Math.random() * (18 - 3)) + 3,
    wisdom: Math.floor(Math.random() * (18 - 3)) + 3,
    charisma: Math.floor(Math.random() * (18 - 3)) + 3,
  };
};

const printCharacter = (character: Character): string => {
  let characterList: string[] = [];
  for (const [key, value] of Object.entries(character)) {
    characterList.push(`${key} : ${value}\n`);
  }
  return characterList.join("");
};
