// hooks/useTimer.ts
import { useState, useRef } from 'react';

export const useTimer = (initialTime: number, onTimeout: () => void) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(initialTime);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    setTimeRemaining(initialTime);
    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    timerRef.current = intervalId;
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return { timeRemaining, startTimer, stopTimer };
};
