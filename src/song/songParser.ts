import { Midi } from "@tonejs/midi";
import { Instrument } from "./types.ts";


export function parseMidiForGame(midi: Midi) {


    const instrArr: Instrument[] = midi.tracks.map((track) => {
        const viewed = new Set();

        const instrument: Instrument = {
                name: track.instrument.name,
                notes: [],
                number: track.instrument.number
            };

        track.notes.forEach(note => {
            const line = note.midi % 4;
            const viewKey = `${line}-${Math.floor(note.time/0.010)}`;
            if (viewed.has(viewKey)) return;
            viewed.add(viewKey);

            instrument.notes.push({
                note: line,
                startTime: note.time,
                duration: note.duration,
            });
        });

        return instrument;
    })
        .filter(instr => instr.notes.length > 0);

    // instrArr.forEach(instr => instr.notes.sort((a, b) => a.startTime - b.startTime));


    return instrArr;
}
