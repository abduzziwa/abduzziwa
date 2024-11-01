import React from "react";
import { render, screen, act, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import MultiplicationGame from "./MultiplicationGame";
import { multiplicationQuestions } from "@/app/data/multiplicationQuetions";
import MultiplicationGame from "@/app/page";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("MultiplicationGame", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  describe("Initial Rendering", () => {
    it("renders the game title and table selection screen", () => {
      render(<MultiplicationGame />);

      expect(screen.getByText("Multiplication Practice")).toBeInTheDocument();
      expect(
        screen.getByText("Choose a multiplication table to practice")
      ).toBeInTheDocument();
    });

    it("renders all multiplication table options", () => {
      render(<MultiplicationGame />);

      Object.keys(multiplicationQuestions).forEach((table) => {
        expect(
          screen.getByRole("button", { name: `${table} Times Table` })
        ).toBeInTheDocument();
      });
    });
  });

  describe("Game Flow", () => {
    it("starts game when a multiplication table is selected", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      expect(screen.getByText("2 Times Table Practice")).toBeInTheDocument();
      expect(screen.getByText("Question 1 of 12")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Back to Table Selection" })
      ).toBeInTheDocument();
    });

    it("shows feedback and advances to next question after answer", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      // Start game
      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      // Get first question's correct answer
      const firstQuestion = multiplicationQuestions[2][0];
      await user.click(
        screen.getByText(firstQuestion.correctAnswer.toString())
      );

      // Check feedback
      expect(screen.getByText("Correct!")).toBeInTheDocument();

      // Advance timer and check next question
      act(() => {
        jest.advanceTimersByTime(1500);
      });

      expect(screen.getByText("Question 2 of 12")).toBeInTheDocument();
    });

    it("completes game and shows summary after all questions", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      // Start game
      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      // Answer all questions correctly
      for (let i = 0; i < 12; i++) {
        const question = multiplicationQuestions[2][i];
        await user.click(screen.getByText(question.correctAnswer.toString()));
        act(() => {
          jest.advanceTimersByTime(1500);
        });
      }

      // Check summary screen
      expect(screen.getByText("Game Summary")).toBeInTheDocument();
      expect(screen.getByText("12/12")).toBeInTheDocument();
      expect(
        screen.getByText("Perfect! You're a math genius!")
      ).toBeInTheDocument();
    });
  });

  describe("Game Navigation", () => {
    it("returns to table selection when back button is clicked", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      await user.click(screen.getByRole("button", { name: "2 Times Table" }));
      await user.click(
        screen.getByRole("button", { name: "Back to Table Selection" })
      );

      expect(
        screen.getByText("Choose a multiplication table to practice")
      ).toBeInTheDocument();
    });

    it("restarts game from summary screen", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      // Complete game
      await user.click(screen.getByRole("button", { name: "2 Times Table" }));
      for (let i = 0; i < 12; i++) {
        await user.click(
          screen.getByText(
            multiplicationQuestions[2][i].correctAnswer.toString()
          )
        );
        act(() => {
          jest.advanceTimersByTime(1500);
        });
      }

      // Restart game
      await user.click(screen.getByRole("button", { name: "Play Again" }));

      expect(screen.getByText("Question 1 of 12")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("supports keyboard navigation", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      // Focus first table button
      const tableButton = screen.getByRole("button", { name: "2 Times Table" });
      tableButton.focus();
      expect(tableButton).toHaveFocus();

      // Select with keyboard
      await user.keyboard("{Enter}");

      // Check if answer buttons are focusable
      const answerButtons = screen
        .getAllByRole("button")
        .filter(
          (button) => !button.textContent?.includes("Back to Table Selection")
        );

      answerButtons[0].focus();
      expect(answerButtons[0]).toHaveFocus();
    });

    it("maintains focus management during game play", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      const answerButtons = screen
        .getAllByRole("button")
        .filter(
          (button) => !button.textContent?.includes("Back to Table Selection")
        );

      // Answer first question
      await user.click(answerButtons[0]);

      // Check if buttons are disabled during feedback
      answerButtons.forEach((button) => {
        expect(button).toBeDisabled();
      });
    });
  });

  describe("Edge Cases", () => {
    it("handles rapid clicking on answer buttons", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      const answerButton = screen
        .getAllByRole("button")
        .find(
          (button) => !button.textContent?.includes("Back to Table Selection")
        );

      if (answerButton) {
        // Click multiple times rapidly
        await user.click(answerButton);
        await user.click(answerButton);
        await user.click(answerButton);
      }

      // Should only show one feedback message
      const feedbackElements = screen.getAllByText(/correct|incorrect/i);
      expect(feedbackElements).toHaveLength(1);
    });

    it("maintains correct game state when switching tables", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      // Start with 2 times table
      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      // Answer first question
      await user.click(
        screen.getByText(multiplicationQuestions[2][0].correctAnswer.toString())
      );

      // Go back and select different table
      await user.click(
        screen.getByRole("button", { name: "Back to Table Selection" })
      );
      await user.click(screen.getByRole("button", { name: "3 Times Table" }));

      // Should start fresh
      expect(screen.getByText("Question 1 of 12")).toBeInTheDocument();
    });
  });

  describe("Summary Screen", () => {
    it("displays correct score and time information", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      // Answer all questions
      for (let i = 0; i < 12; i++) {
        await user.click(
          screen.getByText(
            multiplicationQuestions[2][i].correctAnswer.toString()
          )
        );
        act(() => {
          jest.advanceTimersByTime(1500);
        });
      }

      expect(screen.getByText("Score")).toBeInTheDocument();
      expect(screen.getByText("Total Time")).toBeInTheDocument();

      // Check results list
      const summarySection = screen
        .getByText("Question Results")
        .closest("div");
      const results = within(summarySection as HTMLElement).getAllByRole(
        "article"
      );
      expect(results).toHaveLength(12);
    });

    it("shows appropriate feedback message based on score", async () => {
      render(<MultiplicationGame />);
      const user = userEvent.setup({ delay: null });

      await user.click(screen.getByRole("button", { name: "2 Times Table" }));

      // Answer all questions correctly
      for (let i = 0; i < 12; i++) {
        await user.click(
          screen.getByText(
            multiplicationQuestions[2][i].correctAnswer.toString()
          )
        );
        act(() => {
          jest.advanceTimersByTime(1500);
        });
      }

      expect(
        screen.getByText("Perfect! You're a math genius!")
      ).toBeInTheDocument();
    });
  });
});
