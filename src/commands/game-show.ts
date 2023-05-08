import { Message, Events } from "discord.js";
import { Command } from "../utils";
import axios from "axios";

const command: Command = {
  callback: (message: Message, args: string[]) => {
    getQuestions(message, args);
  },
  description:
    "Catbob gives trivia questions in these categories music sport_and_leisure,\
    film_and_tv, arts_and_literature, history, society_and_culture ,science, geography,\
     food_and_drink, general_knowledge",
};

export default command;

interface Question {
  question: string;
  correctAnswer: string;
  options: string[];
}

const getQuestions = (message: Message, args: string[]) => {
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
            options: [
              ...apiQuestion.incorrectAnswers,
              apiQuestion.correctAnswer,
            ],
          };
        }
      );
      message.reply(`${questionArray[0].question}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showQuestion = (message: Message, question: Question): void => {
  const answers = question.options.sort((a, b) => 0.5 - Math.random());
  const answersString = answers.join("\n");
  message.reply(`${question.question}\n${answersString}`);
};
