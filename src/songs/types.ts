export interface LightEvent {
  time: number;
  lightIndex: number;
  colorI: number;
  modeI: number;
}

export interface NoteEvent {
  note: number;
  time: number;
  duration: number;
  status?: boolean;
}

export interface DifficultyInfo {
  name: string;
  characteristic: string;
  notes: number;
  notesPerSecond: number;
}

export interface SongMeta {
  id: string;
  hash: string;
  songAuthor: string;
  songName: string;
  title: string;
  duration: number;
  bpm: number;
  score: number;
  coverURL: string;
  previewURL: string;
  downloadURL: string;
  difficulties: DifficultyInfo[];
  _removed?: boolean;
}

export interface SongData {
  difficulties: { difficulty: string; characteristic: string; rank: number; notes: NoteEvent[] }[];
  lightEvents: LightEvent[];
}
