
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
