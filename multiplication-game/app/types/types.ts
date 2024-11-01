// types.ts
export type GameState = "idle" | "showingFirst" | "showingSecond" | "showingChoices" | "summary";

export interface Question {
  quetionId: number;
  num1: number;
  num2: number;
  choices: number[];
  correctAnswer: number;
}

export interface QuestionResult {
  quetionId: number;
  num1: number;
  num2: number;
  correctAnswer: number;
  selectedAnswer: number | "N/A";
  isCorrect: boolean;
}

export interface GameStyles {
  transform: string;
  transition: string;
}