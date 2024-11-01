"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, RotateCcw, X } from "lucide-react";
import { multiplicationQuestions } from "@/app/data/multiplicationQuetions";

type GameState = "idle" | "playing" | "summary";

type Question = {
  quetionId: number;
  num1: number;
  num2: number;
  correctAnswer: number;
  choices: number[];
};

type QuestionResult = Question & {
  selectedAnswer: number | "N/A";
  isCorrect: boolean;
};

const TOTAL_QUESTIONS = 12;

export default function MultiplicationGame() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [gameState, setGameState] = useState<GameState>("idle");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    if (gameState === "playing" && startTime === null) {
      setStartTime(Date.now());
    } else if (
      gameState === "summary" &&
      startTime !== null &&
      endTime === null
    ) {
      setEndTime(Date.now());
    }
  }, [gameState, startTime, endTime]);

  const handleTableSelect = (table: number) => {
    setSelectedTable(table);
    startGame();
  };

  const resetSelection = () => {
    setSelectedTable(null);
    setGameState("idle");
  };

  const startGame = () => {
    setGameState("playing");
    setQuestionResults([]);
    setCurrentQuestionIndex(0);
    setStartTime(null);
    setEndTime(null);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
  };

  const handleAnswer = (choice: number) => {
    if (!selectedTable) return;
    const questions = multiplicationQuestions[selectedTable];
    const currentQuestion = questions[currentQuestionIndex];

    const correct = choice === currentQuestion.correctAnswer;
    setSelectedAnswer(choice);
    setIsCorrect(correct);
    setShowFeedback(true);

    setQuestionResults((prev) => [
      ...prev,
      {
        ...currentQuestion,
        selectedAnswer: choice,
        isCorrect: correct,
      },
    ]);

    setTimeout(() => {
      if (currentQuestionIndex >= TOTAL_QUESTIONS - 1) {
        setGameState("summary");
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowFeedback(false);
      }
    }, 1500);
  };

  const calculateScore = (): string => {
    const correctAnswers = questionResults.filter(
      (result) => result.isCorrect
    ).length;
    return `${correctAnswers}/${TOTAL_QUESTIONS}`;
  };

  const calculateTotalTime = (): number => {
    if (startTime && endTime) {
      return Math.round((endTime - startTime) / 1000);
    }
    return 0;
  };

  const getFeedbackMessage = (
    percentage: number
  ): { message: string; color: string } => {
    if (percentage === 100)
      return {
        message: "Perfect! You're a math genius!",
        color: "text-purple-600",
      };
    if (percentage >= 80)
      return { message: "Excellent work! Keep it up!", color: "text-blue-600" };
    if (percentage >= 60)
      return {
        message: "Good job! You're making progress.",
        color: "text-green-600",
      };
    if (percentage >= 40)
      return {
        message: "Not bad! Keep practicing to improve.",
        color: "text-yellow-600",
      };
    if (percentage >= 20)
      return {
        message: "You're on the right track. Don't give up!",
        color: "text-orange-600",
      };
    return {
      message: "Keep trying! Every attempt helps you learn.",
      color: "text-red-600",
    };
  };

  const renderTableSelection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Choose a multiplication table to practice</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Object.keys(multiplicationQuestions).map((table) => (
            <Button
              key={table}
              onClick={() => handleTableSelect(Number(table))}
              variant="outline"
              className="text-lg w-full"
            >
              {table} Times Table
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderGame = () => {
    if (!selectedTable) return null;
    const questions = multiplicationQuestions[selectedTable];
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div>
        <Button onClick={resetSelection} className="mb-4">
          <span aria-hidden="true">←</span> Back to Table Selection
        </Button>
        <Card className="w-full max-w-xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-2xl font-bold text-center">
                {selectedTable} Times Table Practice
              </h2>
              <div className="w-full space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${
                        ((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100
                      }%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl font-bold mb-8"
                >
                  {currentQuestion.num1} × {currentQuestion.num2} = ?
                </motion.div>
              </AnimatePresence>

              <div className="grid grid-cols-2 gap-4 w-full">
                {currentQuestion.choices.map((choice) => (
                  <Button
                    key={choice}
                    onClick={() => handleAnswer(choice)}
                    variant={selectedAnswer === choice ? "default" : "outline"}
                    className="text-lg py-6"
                    disabled={showFeedback}
                  >
                    {choice}
                  </Button>
                ))}
              </div>

              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`text-2xl font-bold ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Incorrect!"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderGameSummary = () => {
    const [correctAnswers, totalQuestions] = calculateScore()
      .split("/")
      .map(Number);
    const percentage = (correctAnswers / totalQuestions) * 100;
    const feedback = getFeedbackMessage(percentage);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col"
      >
        <div className="flex-grow overflow-y-auto">
          <div className="space-y-6 p-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Game Summary
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-semibold">Score</span>
                  <span className="text-3xl font-bold">{calculateScore()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-semibold">Total Time</span>
                  <span className="text-3xl font-bold">
                    {calculateTotalTime()} seconds
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className={`text-center text-lg font-semibold mb-6 ${feedback.color}`}
                >
                  {feedback.message}
                </motion.div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Question Results</h3>
                <div className="space-y-4">
                  {/* {questionResults.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card
                        className={
                          result.isCorrect ? "bg-green-50" : "bg-red-50"
                        }
                      >
                        <CardContent className="p-4 flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-medium">
                              {result.num1} × {result.num2}
                            </span>
                            <span className="text-gray-600">=</span>
                            <span className="text-lg font-bold">
                              {result.selectedAnswer}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              Correct: {result.correctAnswer}
                            </span>
                            {result.isCorrect ? (
                              <Check
                                className="h-5 w-5 text-green-500"
                                aria-label="Correct answer"
                              />
                            ) : (
                              <X
                                className="h-5 w-5 text-red-500"
                                aria-label="Incorrect answer"
                              />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))} */}
                  {questionResults.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card
                        role="article" // Add this line to set the role to "article"
                        className={
                          result.isCorrect ? "bg-green-50" : "bg-red-50"
                        }
                      >
                        <CardContent className="p-4 flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-medium">
                              {result.num1} × {result.num2}
                            </span>
                            <span className="text-gray-600">=</span>
                            <span className="text-lg font-bold">
                              {result.selectedAnswer}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              Correct: {result.correctAnswer}
                            </span>
                            {result.isCorrect ? (
                              <Check
                                className="h-5 w-5 text-green-500"
                                aria-label="Correct answer"
                              />
                            ) : (
                              <X
                                className="h-5 w-5 text-red-500"
                                aria-label="Incorrect answer"
                              />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-4 mt-4"
        >
          <Button onClick={startGame} className="w-full text-lg py-6" size="lg">
            <RotateCcw className="mr-2 h-5 w-5" aria-hidden="true" />
            Play Again
          </Button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto py-8 overflow-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Multiplication Practice
      </h1>
      {selectedTable === null
        ? renderTableSelection()
        : gameState === "playing"
        ? renderGame()
        : renderGameSummary()}
    </div>
  );
}
