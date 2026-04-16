import { createContext } from "preact";
import { useContext, useState, useEffect, useCallback } from "preact/hooks";
import * as songLoader from "../../songs/songLoader.ts";

// Create context
const SavedSongsContext = createContext();

// SavedSongsContext provider component
export const SavedSongsProvider = ({ children }) => {
  const [savedSongs, setSavedSongs] = useState([]);

  // Load saved songs when the component mounts
  useEffect(() => {
    const loadSavedSongs = async () => {
      const songs = await songLoader.getDownloadedSongs();
      setSavedSongs(songs);
    };
    loadSavedSongs();
  }, []);

  const saveSong = useCallback(async (song) => {
    await songLoader.saveSong(song);
    setSavedSongs((prevSongs) => {
      const existing = prevSongs.find(s => s.id === song.id);
      if (existing) {
        return prevSongs.map(s => s.id === song.id ? { ...song, _removed: undefined } : s);
      }
      return [...prevSongs, song];
    });
  }, []);

  const removeSong = useCallback(async (songId) => {
    await songLoader.deleteSong(songId);
    setSavedSongs((prevSongs) => prevSongs.map(song =>
      song.id === songId ? { ...song, _removed: true } : song
    ));
  }, []);

  return (
    <SavedSongsContext.Provider value={{ savedSongs, saveSong, removeSong }}>
  {children}
  </SavedSongsContext.Provider>
);
};

// Custom hook to use saved songs context
export const useSavedSongs = () => {
  const context = useContext(SavedSongsContext);
  if (!context) {
    throw new Error('useSavedSongs must be used within SavedSongsProvider');
  }
  return context;
};
