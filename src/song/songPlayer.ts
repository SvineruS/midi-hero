import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import { loadInstrument } from "./loadInstruments.ts";
import { PolySynth, Sampler } from "tone";

const CHUNK_SIZE_SEC = 2;


export class SongPlayer {

    synths: (Sampler | PolySynth)[] = [];
    startTime = 0;
    lastLoadedChunk = -1;
    lastLoadedNote = [];


    constructor(
        public midi: Midi
    ) {
    }

    async load() {
        console.log("Loading instruments");
        this.synths = [];
        for (const track of this.midi.tracks)
            this.synths.push(await loadInstrument(track.instrument))
    }

    play() {
        this.startTime = Tone.now() + 1;
        this.synths.forEach((s) => s.toDestination())
        console.log("Playing", this.startTime);
    }


    stop() {
        this.synths.forEach(s => s.disconnect())
        this.startTime = 0;
    }

    audioTime() {
        if (this.startTime == 0) return 0;
        return Tone.now() - this.startTime;
    }


    loadNextChunk(time: number) {

        const chunk = Math.round(time / CHUNK_SIZE_SEC);
        if (chunk <= this.lastLoadedChunk) return;
        this.lastLoadedChunk = chunk;

        const from = chunk * CHUNK_SIZE_SEC;
        const to = (chunk + 1) * CHUNK_SIZE_SEC;

        // console.log("Loading chunk", chunk, from, to);

        this.midi.tracks.forEach((track, i) => {
            const synth = this.synths[i];

            for (let j = this.lastLoadedNote[i] ?? 0; j < track.notes.length; j++) {
                const note = track.notes[j];
                if (note.time < from) {
                    this.lastLoadedNote[i] = j;
                    continue;
                }
                if (note.time >= to) break;
                synth.triggerAttackRelease(note.name, note.duration, note.time + this.startTime, note.velocity);
            }
        });

    }
}
