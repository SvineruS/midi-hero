import { LightEvent, NoteEvent, SongMeta, DifficultyInfo } from "../../songs/types.ts";
import { Combo } from "./combo.ts";
import { GameVisuals } from "./gameVisuals.ts";
import { GameNotes } from "./gameNotes.ts";

export interface GameStats {
  score: number;
  hits: number;
  fails: number;
  accuracy: number;
  maxCombo: number;
}


export class Game {
  timeNow = 0;
  timeOffset = 0;

  combo: Combo;
  visuals: GameVisuals;
  notes: GameNotes;

  meta: SongMeta;
  difficulty: DifficultyInfo;



  constructor(notes: NoteEvent[], lightEvents: LightEvent[], meta: SongMeta, difficulty: DifficultyInfo) {
    this.meta = meta;
    this.difficulty = difficulty;
    this.combo = new Combo();
    this.visuals = new GameVisuals(this, lightEvents);
    this.notes = new GameNotes(this, notes);
  }

  getStats(): GameStats {
    const { hits, fails, score, maxCombo } = this.combo;
    const total = hits + fails;
    const accuracy = total === 0 ? 0 : hits / total;
    return { score, hits, fails, accuracy, maxCombo };
  }


  update(timeNow: number) {
    timeNow += this.timeOffset;
    const delta = timeNow - this.timeNow;

    this.timeNow = timeNow;

    this.notes.update();
    this.visuals.update(delta)

  }



  click(line: 1 | 2 | 3 | 4) {
    this.notes.click(line);
  }

  setTimeOffset(timeOffset: number) {
    this.timeOffset = timeOffset;
  }

  setHitWindow(hitWindow: number) {
    this.notes.setHitWindow(hitWindow);
  }


}







