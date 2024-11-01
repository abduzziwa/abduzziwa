// __tests__/page.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../app/page"; // Adjust the path to your page file

describe("Multiplication Game Page", () => {
  it("renders the title", () => {
    render(<Page />);
    expect(screen.getByText(/Multiplication Practice/i)).toBeInTheDocument();
  });

  it("displays table selection on initial render", () => {
    render(<Page />);
    expect(
      screen.getByText(/Choose a multiplication table to practice/i)
    ).toBeInTheDocument();
  });

  it("starts the game when a table is selected", () => {
    render(<Page />);

    // Assuming the buttons for tables are labeled as '1 Times Table', etc.
    fireEvent.click(screen.getByText(/1 Times Table/i));

    // After clicking, the game question should appear
    expect(screen.getByText(/1 × 1 = ?/i)).toBeInTheDocument(); // Adjust based on actual question
  });

  // Additional tests can be added here to simulate user interactions and check outcomes
});
