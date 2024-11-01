import { Question } from "../types/types";

// utils/gameUtils.ts
export const generateQuestion = (): Question => {
    const num1: number = Math.floor(Math.random() * 10) + 1;
    const num2: number = Math.floor(Math.random() * 10) + 1;
    const correctAnswer: number = num1 * num2;
  
    const wrongAnswers: number[] = [];
    while (wrongAnswers.length < 3) {
      const wrong: number = Math.floor(Math.random() * 100) + 1;
      if (wrong !== correctAnswer && !wrongAnswers.includes(wrong)) {
        wrongAnswers.push(wrong);
      }
    }
  
    return {
      num1,
      num2,
      choices: [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5),
      correctAnswer,
    };
  };