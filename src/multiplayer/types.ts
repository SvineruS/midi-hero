export interface PlayerInfo {
  name: string;
}

export interface SongSelection {
  songId: string;
  diffI: number;
}

export interface ReadyStatus {
  ready: boolean;
}

export interface ScoreUpdate {
  score: number;
  combo: number;
  hits: number;
  fails: number;
}

export interface EndStats {
  score: number;
  hits: number;
  fails: number;
  accuracy: number;
  maxCombo: number;
  grade: string;
}
