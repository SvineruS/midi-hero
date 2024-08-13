import {Midi} from "@tonejs/midi";
import {loadInstrument} from "./tonejs-instruments/Tonejs-Instruments.ts";
import * as Tone from "tone";
import { createText, text1 } from "./3d/3d.ts";

export interface Note {
    note: number;
    name: string;
    startTime: number;
    duration: number;
    status?: boolean;
    velocity: number;
}

export interface Instrument {
    notes: Note[]
    name: string;
    number: number;
    trackId: number;
}

Tone.setContext(new Tone.Context({latencyHint: "playback"}))


const CHUNK_SIZE_SEC = 2;


const COMBO_SCORES = [1, 2, 4, 8]


export class Game {
    lastLoadedChunk = -1;
    synths: any[] = [];
    startTime = 0;
    instruments: { [inst: number]: Instrument } = {};
    _graphicTime = 0;

    hits = 0;
    fails = 0;
    combo = 0;
    score = 0;

    constructor() {

    }

    async loadSong() {

        const midi = await Midi.fromUrl("/src/song.mid")
        console.log(midi)


        midi.tracks.forEach((track, i) => {
            if (this.instruments[track.instrument.number] === undefined)
                this.instruments[track.instrument.number] = {name: track.instrument.name, notes: [], trackId: i, number: track.instrument.number};

            track.notes.forEach(note => {
                this.instruments[track.instrument.number].notes.push({
                    note: note.midi,
                    name: note.name,
                    startTime: note.time,
                    duration: note.duration,
                    velocity: note.velocity,
                });
            });
        });


        this.synths = await Promise.all(
            midi.tracks.map(track => loadInstrument(track.instrument))
        )
        console.log(this.instruments)

    }


    stop() {
        this.synths.forEach(s => s.disconnect())
        this.startTime = 0;
    }

    play() {
        this.startTime = Tone.now() + 1;
        this.synths.forEach((s) => s.toDestination())
        console.log("Playing", this.startTime);
    }

    onFail() {
        this.fails++;
        this.combo = 0;
        this._updateText()
    }
    onSuccess() {
        this.hits++;
        this.combo++;
        this.score += this.combo > COMBO_SCORES.length-1 ? COMBO_SCORES[COMBO_SCORES.length - 1] : COMBO_SCORES[this.combo];
        this._updateText()
    }

    _updateText() {
        text1.geometry = createText(`   Score: ${this.score}\n   Combo: ${this.combo}\n   Hits: ${this.hits}\n   Fails: ${this.fails}`);
    }

    audioTime() {
        if (this.startTime == 0) return 0;
        return Tone.now() - this.startTime;
    }

    graphicTime() {
        return this._graphicTime;
    }


    getCurrentNotes(start: number, end: number, instrument: number): Note[] {
        if (start < 0) start = 0;
        const notes = this.instruments[instrument].notes;
        const result = [];

        let l = 0;
        let r = notes.length - 1;
        for (let i = 0; i < 15; i++) {
            const mid = Math.floor((r + l) / 2);
            if (notes[mid].startTime < start) l = mid;
            else r = mid;
        }


        for (let i = l; i < notes.length; i++) {
            const note = notes[i];

            if (note.startTime > end) break
            if (note.startTime < start) continue;
            result.push(note)

        }
        return result;
    }

    update(timeNow: number) {
        this._graphicTime = timeNow;

        const chunk = Math.round(timeNow / CHUNK_SIZE_SEC);
        if (chunk <= this.lastLoadedChunk) return;
        this.lastLoadedChunk = chunk;

        const from = chunk * CHUNK_SIZE_SEC;
        const to = (chunk + 1) * CHUNK_SIZE_SEC;

        Object.values(this.instruments).forEach((instrument) => {
            const notes = this.getCurrentNotes(from, to, instrument.number)
            const synth = this.synths[instrument.trackId];
            notes.forEach((note) => {
                synth.triggerAttackRelease(note.name, note.duration, note.startTime + this.startTime, note.velocity);
            });
        });


    }

    scheduleSound() {

    }


}







