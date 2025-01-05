import { NoteEvent } from "../song/types.ts";
import { findMininimum } from "../utils.ts";
import { Game } from "./game.ts";


const DISPLAY_TIME_TOP = 2;
const DISPLAY_TIME_BOTTOM = 0.1;


export class GameNotes {

  notes: NoteEvent[] = [];

  timeTop = 0;

  _bottomNoteIndex = 0;
  _bottomClickableNoteIndex = 0;
  _topClickableNoteIndex = 0;
  _topNoteIndex = 0;

  hitWindow = 0.05;

  constructor(public game: Game, notes: NoteEvent[]) {
    this.setNotes(notes);
    this.setHitWindow(0.05);   // 50ms before and after finish
  }

  setNotes(notes: NoteEvent[]) {
    this.notes = notes
    this._bottomNoteIndex = 0;
    this._bottomClickableNoteIndex = 0;
    this._topClickableNoteIndex = 0;
    this._topNoteIndex = 0;
  }


  update() {
    const timeNow = this.game.timeNow

    this.timeTop = timeNow + DISPLAY_TIME_TOP;
    const timeClickTop = timeNow + this.hitWindow;
    const timeClickBottom = timeNow - Math.min(this.hitWindow, DISPLAY_TIME_BOTTOM);
    const timeBot = timeNow - DISPLAY_TIME_BOTTOM;


    const notes = this.notes;


    for (let i = this._bottomNoteIndex; i < notes.length; i++) {
      const note = notes[i];
      const noteTime = note.time;

      if (noteTime < timeBot) {
        this._bottomNoteIndex = i;
      }
      if (noteTime < timeClickBottom) {
        this._bottomClickableNoteIndex = i;
        this.noteFinished(note);
      } else if (noteTime < timeClickTop) {
        this._topClickableNoteIndex = i;
      } else if (noteTime < this.timeTop) {
        this._topNoteIndex = i;
      } else
        break;
    }

  }



  getDisplayNotes() {
    return this.notes.slice(this._bottomNoteIndex, this._topNoteIndex + 1);
  }

  getClickableNotes(line: number) {
    const notes = this.notes.slice(this._bottomClickableNoteIndex, this._topClickableNoteIndex + 1);
    return notes.filter((note) => line == note.note);
  }

  click(line: 1 | 2 | 3 | 4) {
    const candidates = this.getClickableNotes(line);

    if (candidates.length == 0) {
      this.onFail(line, true);
      // console.warn("No candidates")
      return false;
    }

    const nearestNote = findMininimum(candidates, this._distance);
    // console.log(this._distanceS(nearestNote), this._distanceS(nearestNote) > 0 ? "late" : "early")

    if (nearestNote.status !== undefined) {
      // console.warn(nearestNote.status ? "Already hit" : "Already miss")
      this.onFail(line, true);
      return false;
    }

    nearestNote.status = true;
    this.onSuccess(line);
    return true;
  }

  private noteFinished(note: NoteEvent) {
    if (note.status !== undefined) return;
    note.status = false;
    this.onFail(note.note, false);
    console.warn("Missed note")
  }


  onFail(line: number, isUserInput = false) {
    this.game.combo.onFail();
    if (isUserInput)
      this.game.visuals.finishVisuals.onHitOrMiss(false, line)
  }

  onSuccess(line: number) {
    this.game.combo.onSuccess();
    this.game.visuals.finishVisuals.onHitOrMiss(true, line)
  }


  setHitWindow(hitTime: number) {
    this.hitWindow = hitTime;
    this.game.visuals.finishVisuals.setFinishSize(this.hitWindow, DISPLAY_TIME_TOP)
  }

  private _distanceS = (note: NoteEvent) => note.time - this.game.timeNow;
  private _distance = (note: NoteEvent) => Math.abs(this._distanceS(note));
}







