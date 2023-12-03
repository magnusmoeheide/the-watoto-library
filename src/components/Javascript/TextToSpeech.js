import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
  
    const setVoice = () => {
      const voices = synth.getVoices().filter(voice => voice.lang === "en-US");
      const preferredVoice = voices[0]; // Selects the first "en-US" voice; adjust as needed
  
      const u = new SpeechSynthesisUtterance(text);
      if (preferredVoice) {
        u.voice = preferredVoice;
      }
      u.pitch = 0.8;
      u.rate = 0.8;
      u.volume = 1;
      setUtterance(u);
    };
  
    setVoice();
    if (typeof synth.onvoiceschanged === 'function') {
      synth.onvoiceschanged = setVoice;
    }
  
    return () => {
      synth.cancel();
    };
  }, [text]);
  
  

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div>
      <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TextToSpeech;