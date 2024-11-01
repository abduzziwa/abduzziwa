import { useEffect, useRef } from "react";

// hooks/useAudio.ts
export const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioPath = "/sound/buzzer-or-wrong-answer-20582.mp3"; // Correct path
    console.log("Loading audio from:", audioPath);
    audioRef.current = new Audio(audioPath);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const playBeep = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(e => console.log("Audio playback failed:", e));
    }
  };

  return { playBeep };
};
