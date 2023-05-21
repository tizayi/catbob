import { Message } from "discord.js";
import { Command } from "../utils";

// first off always lowercase unless you are defining a type, interface or class

// Interfaces and types are a typescipt thing they help spot bugs by enforcing strict typing
interface Character {
  class: string;
  race: string;
  background: string;
  region: string;
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
const backgroundSelection = [
  "Acolyte",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Folk Hero",
  "Guild Artisan",
  "Hermit",
  "Nobel",
  "Outlander",
  "Sage",
  "Sailor",
  "Solider",
  "Urchin",
];
const regionSelection = [
  "North Danraz",
  "South Danraz",
  "Rishtar",
  "Dimriz",
  "Sanrin",
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
  const character: Character = {
    class: classSelection[Math.floor(Math.random() * classSelection.length)],
    race: raceSelection[Math.floor(Math.random() * raceSelection.length)],
    background: backgroundSelection[Math.floor(Math.random() * backgroundSelection.length)],
    region: regionSelection[Math.floor(Math.random() * regionSelection.length)],
    strength: Math.floor(Math.random() * (18 - 3 + 1)) + 3,
    dexterity: Math.floor(Math.random() * (18 - 3 + 1)) + 3,
    constitution: Math.floor(Math.random() * (18 - 3 + 1)) + 3,
    intelligence: Math.floor(Math.random() * (18 - 3 + 1)) + 3,
    wisdom: Math.floor(Math.random() * (18 - 3 + 1)) + 3,
    charisma: Math.floor(Math.random() * (18 - 3 + 1)) + 3,
  };
  return applyRaceTraits(character);
};

const applyRaceTraits = (character: Character): Character => {
  switch (character.race) {
    case "Dwarf":
      character.constitution += 2;
      break;
    case "Elf":
      character.dexterity += 2;
      break;
    case "Halfling":
      character.dexterity += 2;
      break;
    case "Human":
      character.strength += 1;
      character.dexterity += 1;
      character.constitution += 1;
      character.intelligence += 1;
      character.wisdom += 1;
      character.charisma += 1;
      break;
    case "Dragonborn":
      character.strength += 2;
      character.charisma += 1;
      break;
    case "Gnome":
      character.intelligence += 2;
      break;
    case "Half-Elf":
      character.charisma += 2;
      break;
    case "Half-Orc":
      character.strength += 2;
      character.constitution += 1;
      break;
    case "Tiefling":
      character.intelligence += 1;
      character.charisma += 2;
      break;
    default:
      break;
  }
  return character;
};

const printCharacter = (character: Character): string => {
  let characterList: string[] = [];
  for (const [key, value] of Object.entries(character)) {
    characterList.push(`${key} : ${value}\n`);
  }
  return characterList.join("");
};
