import { Instrument } from "../song/types.ts";
import { Combo } from "./combo.ts";
import { findMininimum } from "../utils.ts";
import { GameVisual } from "./gameVisual.ts";



const DISPLAY_TIME_TOP = 2;
const DISPLAY_TIME_BOTTOM = 0.1;


export class Game {
    _gameTime = 0;

    timeTop = 0;
    timeBot = 0;

    _bottomNoteIndex = 0;
    _bottomClickableNoteIndex = 0;
    _topClickableNoteIndex = 0;
    _topNoteIndex = 0;


    selectedInstrument = 0;
    hitTime = 0.05;


    combo = new Combo();
    visuals = new GameVisual(this);

    constructor(
        public instruments: Instrument[],
    ) {
        this.setHitTime(0.05);   // 50ms before and after finish
    }





    setInstrument(instrument: number) {
        console.log("setInstrument", instrument)
        this.selectedInstrument = instrument
        this._bottomNoteIndex = 0;
        this._bottomClickableNoteIndex = 0;
        this._topClickableNoteIndex = 0;
        this._topNoteIndex = 0;
        console.log(this.instruments[instrument].notes)
    }


    update(timeNow: number) {
        this._gameTime = timeNow;

        this.timeTop = timeNow + DISPLAY_TIME_TOP;
        this.timeBot = timeNow - DISPLAY_TIME_BOTTOM;

        const timeClickTop = timeNow + this.hitTime;
        const timeClickBottom = timeNow - this.hitTime;

        const notes = this.instruments[this.selectedInstrument].notes;


        for (let i = this._bottomNoteIndex; i < notes.length; i++) {
            const note = notes[i];
            const noteTime = note.startTime;

            if (noteTime < this.timeBot) this._bottomNoteIndex = i;
            else if (noteTime < timeClickBottom) {
                this._bottomClickableNoteIndex = i;
                if (note.status === undefined) {
                    notes[i].status = false;
                    console.warn("Missed note")
                    this.onFail(note.note, false);
                }
            } else if (noteTime < timeClickTop) this._topClickableNoteIndex = i;
            else if (noteTime < this.timeTop) this._topNoteIndex = i;
            else break;
        }

    }

    getDisplayNotes() {
        return this.instruments[this.selectedInstrument].notes.slice(this._bottomNoteIndex, this._topNoteIndex+1);
    }

    getClickableNotes() {
        return this.instruments[this.selectedInstrument].notes.slice(this._bottomClickableNoteIndex, this._topClickableNoteIndex+1);
    }

    click(line: 1 | 2 | 3 | 4) {
        const notes = this.getClickableNotes();
        const candidates = notes.filter((note) => line == note.note);
        if (candidates.length == 0) {
            this.onFail(line, true);
            console.warn("No candidates")
            return false;
        }

        const note = findMininimum(candidates, (note) => Math.abs(note.startTime - this._gameTime));
        console.log(note.startTime - this._gameTime, note.startTime - this._gameTime > 0 ? "late" : "early")
        if (note.status !== undefined) {
            console.warn(note.status ? "Already hit" : "Already miss")
            this.onFail(line, true);
            return false;
        }

        note.status = true;
        this.onSuccess(line);
        return true;
    }


    onFail(line: number, isUserInput=false) {
        this.combo.onFail();
        if (isUserInput)
            this.visuals.onHitOrMiss(false, line)
    }

    onSuccess(line: number) {
        this.combo.onSuccess();
        this.visuals.onHitOrMiss(true, line)
    }


    setHitTime(hitTime: number) {
        this.hitTime = hitTime;
        this.visuals.setFinishSize(this.hitTime, DISPLAY_TIME_TOP)
    }
}







