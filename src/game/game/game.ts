import { LightEvent, NoteEvent } from "../../songs/types.ts";
import { Combo } from "./combo.ts";
import { GameVisuals } from "./gameVisuals.ts";
import { GameNotes } from "./gameNotes.ts";


export class Game {
  timeNow = 0;
  combo: Combo;
  visuals: GameVisuals;
  notes: GameNotes;



  constructor(notes: NoteEvent[], lightEvents: LightEvent[]) {
    this.combo = new Combo();
    this.visuals = new GameVisuals(this, lightEvents);
    this.notes = new GameNotes(this, notes);
  }


  update(timeNow: number) {
    const delta = timeNow - this.timeNow;

    this.timeNow = timeNow;

    this.notes.update();
    this.visuals.update(delta)

  }



  click(line: 1 | 2 | 3 | 4) {
    this.notes.click(line);
  }

  setHitWindow(hitWindow: number) {
    this.notes.setHitWindow(hitWindow);
  }


}







