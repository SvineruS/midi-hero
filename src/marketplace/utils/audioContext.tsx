import React, { createContext, useContext, useState, useCallback } from 'react';
import { StorageUtil } from "../../settings/settings.ts";

// Create Context
const AudioContext = createContext();


// Audio Context Provider to manage global audio state
export function AudioProvider({ children }) {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(null);

  const playAudio = useCallback((url) => {
    stopAudio();
    const audio = new Audio(url);
    audio.volume = StorageUtil.get("audioVolume") ?? 0.5;
    audio.play();
    setCurrentAudio(audio);
    setCurrentUrl(url);

    audio.onended = stopAudio;
  }, [currentAudio]);

  const stopAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setCurrentAudio(null);
    setCurrentUrl(null);
  }, [currentAudio]);

  return (
    <AudioContext.Provider value={{ currentUrl, playAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
}


// Custom hook to use the audio context
export function useAudio() {
  const context = useContext(AudioContext);
  if (!context)
    throw new Error('useAudio must be used within AudioProvider');
  return context;
}
