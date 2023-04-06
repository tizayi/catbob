import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const compatScore = Math.abs(hashCode(args.join("")) % 100);
    message.reply(`${compatScore}%: ${getPortmanteau(args)}`);
  },
  description: "Catbob is equiped with the latest in match making technology",
};

export default command;

const getPortmanteau = (words: string[]): string => {
  words[0] = upTofirstConsonant(words[0]);
  for (let index = 1; index < words.length - 1; index++) {
    words[index] = upToLastConsonant(words[index]);
    words[index] = firstVowelOnwards(words[index]);
  }
  words[words.length - 1] = firstVowelOnwards(words[words.length - 1]);
  return words.join("");
};

const firstVowelOnwards = (word: string): string => {
  for (let index = 0; index < word.length; index++) {
    if (isVowel(word[index])) {
      return word.slice(index, word.length);
    }
  }
  return word;
};

const upTofirstConsonant = (word: string): string => {
  for (let index = 0; index < word.length; index++) {
    if (!isVowel(word[index])) {
      return word.slice(0, index + 1);
    }
  }
  return word;
};

const upToLastConsonant = (word: string): string => {
  for (let index = word.length - 1; index >= 0; index--) {
    if (!isVowel(word[index])) {
      return word.slice(0, index + 1);
    }
  }
  return word;
};

const isVowel = (letter: string): boolean => {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  if (vowels.includes(letter)) {
    return true;
  } else {
    return false;
  }
};
