import { Message, Events } from "discord.js";
import { Command } from "../utils";
import axios from "axios";

const command: Command = {
  callback: (message: Message, args: string[]) => {
    getQuestions(message, args);
  },
  description: "Catbob enters gameshow mode ([0]_[0])",
};

export default command;

interface Question {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

interface Player {
  name: string;
  userid: string;
  score: number;
}

const addPlayer = (message: Message): Player => {
  return { name: message.author.username, userid: message.author.id, score: 0 };
};

const getQuestions = (message: Message, args: string[]): void => {
  const categories = args[1];
  const difficulty = args[0];
  axios
    .get(
      `https://the-trivia-api.com/api/questions?categories=${categories}&limit=10&region=GB&difficulty=${difficulty}`
    )
    .then((response) => {
      const questionArray: Question[] = response.data.map(
        (apiQuestion: any) => {
          return {
            question: apiQuestion.question,
            correctAnswer: apiQuestion.correctAnswer,
            incorrectAnswers: apiQuestion.incorrectAnswers,
          };
        }
      );
      message.reply(questionArray[0].question);
    })
    .catch((err) => {
      console.log(err);
    });
};
