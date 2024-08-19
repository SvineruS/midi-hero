import { Midi } from "@tonejs/midi";
import { Instrument } from "./types.ts";


export function parseMidiForGame(midi: Midi) {

    console.log(midi)

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
        .filter(instr => instr.notes.length > 0)
        .sort((a, b) => a.notes[0].startTime - b.notes[0].startTime)  // earliest
        // .sort((a, b) => b.notes.length - a.notes.length);  // most notes


    const startTime = instrArr[0].notes[0].startTime;

    console.log(instrArr);
    console.log("startTime", startTime)
    // instrArr.forEach(instr => instr.notes.sort((a, b) => a.startTime - b.startTime));


    return {instruments: instrArr, startTime};
}
