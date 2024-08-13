import {Instrument} from "@tonejs/midi/dist/Instrument";
import {PolySynth, Sampler} from "tone";
import * as Tone from "tone";


const BASE_URL = '/src/tonejs-instruments/samples/'


const defaultSynthOptions = {
    envelope: {attack: 0.02, decay: 0.1, sustain: 0.3, release: 1,},
}

export async function loadInstrument(instrument: Instrument): Promise<Sampler | PolySynth> {
    console.log("searching", instrument.family, instrument.name)
    const fam = instrument.family;
    if (fam == "piano") return load("piano")
    if (fam == "organ") return load("organ")
    if (fam == "guitar") {
        if (instrument.name == "acoustic guitar (nylon)") return load("guitar-nylon")
        if (["electric guitar (jazz)", "electric guitar (clean)", "electric guitar (muted)",
            "overdriven guitar", "distortion guitar"].includes(instrument.name)) return load("guitar-electric")
        if (instrument.name == "guitar harmonics") return load("harmonium")
        return load("guitar-acoustic")
    }
    if (fam == "bass") return load("bass-electric")
    if (fam == "strings") {
        if (instrument.name == "cello") return load("cello")
        if (instrument.name == "contrabass") return load("contrabass")
        return load("violin")
    }
    if (fam == "ensemble") return load("harp")
    if (fam == "brass") {
        if (instrument.name == "trombone") return load("trombone")
        if (instrument.name == "synthbrass 1") return load("trombone")
        if (instrument.name == "french-horn") return load("french-horn")
        if (instrument.name == "tuba") return load("tuba")
        if (instrument.name == "trumpet") return load("trumpet")
        return load("trumpet")

    }
    if (fam == "reed") {
        if (instrument.name == "basson") return load("bassoon")
        return load("clarinet")
    }
    if (fam == "pipe") {
        if (instrument.name == "flute") return load("flute")
        return load("harmonium")
    }
    if (fam == "synth lead") return load("synth")
    if (fam == "drums") return load("drums")
    if (fam == "percussive") {
        if (instrument.name == "reverse cymbal") return loadOne("G#6", BASE_URL+"drums/reverseCymbal.ogg")
        return load("drums")
    }

    console.warn("unknown instrument", instrument.family, instrument.name)
    return new Tone.PolySynth(Tone.Synth, defaultSynthOptions);

}

function load(instrument: keyof typeof instrumentsObj): Promise<Sampler> {
    return new Promise((resolve, reject) => {
        console.log("loading instrument", instrument)
        const sampler = new Sampler(
            instrumentsObj[instrument], {
                baseUrl: BASE_URL + instrument + "/",
                onload: () => resolve(sampler),
                onerror: (err) =>  {console.warn(err, instrument); reject(err)},
            }
        )
    })

}

function loadOne(note: string, path: string): Promise<Sampler> {
    return new Promise((resolve, reject) => {
        console.log("loading path", path)
        const sampler = new Sampler(
            {[note]: path}, {
                onload: () => resolve(sampler),
                onerror: (err) =>  {console.warn(err, path); reject(err)},
            }
        )
    })
}


const instrumentsObj = {

    'drums': {
        'D#2': 'kick.ogg',
    },

    'synth': {
        'C2': 'C2.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'F#4': 'Fs4.ogg',
    },

    'bass-electric': {
        'A#1': 'As1.ogg',
        'A#2': 'As2.ogg',
        'A#3': 'As3.ogg',
        'A#4': 'As4.ogg',
        'C#1': 'Cs1.ogg',
        'C#2': 'Cs2.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'E1': 'E1.ogg',
        'E2': 'E2.ogg',
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'G1': 'G1.ogg',
        'G2': 'G2.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
    },

    'bassoon': {
        'A4': 'A4.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'E4': 'E4.ogg',
        'G2': 'G2.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',

    },

    'cello': {
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'F2': 'F2.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'G2': 'G2.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
        'G#2': 'Gs2.ogg',
        'G#3': 'Gs3.ogg',
        'G#4': 'Gs4.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A#2': 'As2.ogg',
        'A#3': 'As3.ogg',
        'B2': 'B2.ogg',
        'B3': 'B3.ogg',
        'B4': 'B4.ogg',
        'C2': 'C2.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'D2': 'D2.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D#2': 'Ds2.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',
        'E2': 'E2.ogg',

    },

    'clarinet': {
        'D4': 'D4.ogg',
        'D5': 'D5.ogg',
        'D6': 'D6.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'F5': 'F5.ogg',
        'F#6': 'Fs6.ogg',
        'A#3': 'As3.ogg',
        'A#4': 'As4.ogg',
        'A#5': 'As5.ogg',
        'D3': 'D3.ogg',

    },

    'contrabass': {
        'C2': 'C2.ogg',
        'C#3': 'Cs3.ogg',
        'D2': 'D2.ogg',
        'E2': 'E2.ogg',
        'E3': 'E3.ogg',
        'F#1': 'Fs1.ogg',
        'F#2': 'Fs2.ogg',
        'G1': 'G1.ogg',
        'G#2': 'Gs2.ogg',
        'G#3': 'Gs3.ogg',
        'A2': 'A2.ogg',
        'A#1': 'As1.ogg',
        'B3': 'B3.ogg',

    },

    'flute': {
        'A6': 'A6.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C6': 'C6.ogg',
        'C7': 'C7.ogg',
        'E4': 'E4.ogg',
        'E5': 'E5.ogg',
        'E6': 'E6.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',

    },

    'french-horn': {
        'D3': 'D3.ogg',
        'D5': 'D5.ogg',
        'D#2': 'Ds2.ogg',
        'F3': 'F3.ogg',
        'F5': 'F5.ogg',
        'G2': 'G2.ogg',
        'A1': 'A1.ogg',
        'A3': 'A3.ogg',
        'C2': 'C2.ogg',
        'C4': 'C4.ogg',

    },

    'guitar-acoustic': {
        'F4': 'F4.ogg',
        'F#2': 'Fs2.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'G2': 'G2.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
        'G#2': 'Gs2.ogg',
        'G#3': 'Gs3.ogg',
        'G#4': 'Gs4.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A#2': 'As2.ogg',
        'A#3': 'As3.ogg',
        'A#4': 'As4.ogg',
        'B2': 'B2.ogg',
        'B3': 'B3.ogg',
        'B4': 'B4.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'C#5': 'Cs5.ogg',
        'D2': 'D2.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D5': 'D5.ogg',
        'D#2': 'Ds2.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds3.ogg',
        'E2': 'E2.ogg',
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'F2': 'F2.ogg',
        'F3': 'F3.ogg',

    },


    'guitar-electric': {
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',
        'D#5': 'Ds5.ogg',
        'E2': 'E2.ogg',
        'F#2': 'Fs2.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'F#5': 'Fs5.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C6': 'C6.ogg',
        'C#2': 'Cs2.ogg',
    },

    'guitar-nylon': {
        'F#2': 'Fs2.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'F#5': 'Fs5.ogg',
        'G3': 'G3.ogg',
        'G5': 'G3.ogg',
        'G#2': 'Gs2.ogg',
        'G#4': 'Gs4.ogg',
        'G#5': 'Gs5.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',
        'A#5': 'As5.ogg',
        'B1': 'B1.ogg',
        'B2': 'B2.ogg',
        'B3': 'B3.ogg',
        'B4': 'B4.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'C#5': 'Cs5.ogg',
        'D2': 'D2.ogg',
        'D3': 'D3.ogg',
        'D5': 'D5.ogg',
        'D#4': 'Ds4.ogg',
        'E2': 'E2.ogg',
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'E5': 'E5.ogg',
    },


    'harmonium': {
        'C2': 'C2.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C#2': 'Cs2.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'C#5': 'Cs5.ogg',
        'D2': 'D2.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D5': 'D5.ogg',
        'D#2': 'Ds2.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',
        'E2': 'E2.ogg',
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'F2': 'F2.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'F#2': 'Fs2.ogg',
        'F#3': 'Fs3.ogg',
        'G2': 'G2.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
        'G#2': 'Gs2.ogg',
        'G#3': 'Gs3.ogg',
        'G#4': 'Gs4.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A#2': 'As2.ogg',
        'A#3': 'As3.ogg',
        'A#4': 'As4.ogg',
    },

    'harp': {
        'C5': 'C5.ogg',
        'D2': 'D2.ogg',
        'D4': 'D4.ogg',
        'D6': 'D6.ogg',
        'D7': 'D7.ogg',
        'E1': 'E1.ogg',
        'E3': 'E3.ogg',
        'E5': 'E5.ogg',
        'F2': 'F2.ogg',
        'F4': 'F4.ogg',
        'F6': 'F6.ogg',
        'F7': 'F7.ogg',
        'G1': 'G1.ogg',
        'G3': 'G3.ogg',
        'G5': 'G5.ogg',
        'A2': 'A2.ogg',
        'A4': 'A4.ogg',
        'A6': 'A6.ogg',
        'B1': 'B1.ogg',
        'B3': 'B3.ogg',
        'B5': 'B5.ogg',
        'B6': 'B6.ogg',
        'C3': 'C3.ogg',

    },

    'organ': {
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C6': 'C6.ogg',
        'D#1': 'Ds1.ogg',
        'D#2': 'Ds2.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',
        'D#5': 'Ds5.ogg',
        'F#1': 'Fs1.ogg',
        'F#2': 'Fs2.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'F#5': 'Fs5.ogg',
        'A1': 'A1.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',
        'C1': 'C1.ogg',
        'C2': 'C2.ogg',
    },

    'piano': {
        'A7': 'A7.ogg',
        'A1': 'A1.ogg',
        'A2': 'A2.ogg',
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',
        'A6': 'A6.ogg',
        'A#7': 'As7.ogg',
        'A#1': 'As1.ogg',
        'A#2': 'As2.ogg',
        'A#3': 'As3.ogg',
        'A#4': 'As4.ogg',
        'A#5': 'As5.ogg',
        'A#6': 'As6.ogg',
        'B7': 'B7.ogg',
        'B1': 'B1.ogg',
        'B2': 'B2.ogg',
        'B3': 'B3.ogg',
        'B4': 'B4.ogg',
        'B5': 'B5.ogg',
        'B6': 'B6.ogg',
        'C7': 'C7.ogg',
        'C1': 'C1.ogg',
        'C2': 'C2.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C6': 'C6.ogg',
        'C#7': 'Cs7.ogg',
        'C#1': 'Cs1.ogg',
        'C#2': 'Cs2.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'C#5': 'Cs5.ogg',
        'C#6': 'Cs6.ogg',
        'D7': 'D7.ogg',
        'D1': 'D1.ogg',
        'D2': 'D2.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D5': 'D5.ogg',
        'D6': 'D6.ogg',
        'D#7': 'Ds7.ogg',
        'D#1': 'Ds1.ogg',
        'D#2': 'Ds2.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',
        'D#5': 'Ds5.ogg',
        'D#6': 'Ds6.ogg',
        'E7': 'E7.ogg',
        'E1': 'E1.ogg',
        'E2': 'E2.ogg',
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'E5': 'E5.ogg',
        'E6': 'E6.ogg',
        'F7': 'F7.ogg',
        'F1': 'F1.ogg',
        'F2': 'F2.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'F5': 'F5.ogg',
        'F6': 'F6.ogg',
        'F#7': 'Fs7.ogg',
        'F#1': 'Fs1.ogg',
        'F#2': 'Fs2.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'F#5': 'Fs5.ogg',
        'F#6': 'Fs6.ogg',
        'G7': 'G7.ogg',
        'G1': 'G1.ogg',
        'G2': 'G2.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
        'G5': 'G5.ogg',
        'G6': 'G6.ogg',
        'G#7': 'Gs7.ogg',
        'G#1': 'Gs1.ogg',
        'G#2': 'Gs2.ogg',
        'G#3': 'Gs3.ogg',
        'G#4': 'Gs4.ogg',
        'G#5': 'Gs5.ogg',
        'G#6': 'Gs6.ogg',
    },

    'saxophone': {
        'D#5': 'Ds5.ogg',
        'E3': 'E3.ogg',
        'E4': 'E4.ogg',
        'E5': 'E5.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'F5': 'F5.ogg',
        'F#3': 'Fs3.ogg',
        'F#4': 'Fs4.ogg',
        'F#5': 'Fs5.ogg',
        'G3': 'G3.ogg',
        'G4': 'G4.ogg',
        'G5': 'G5.ogg',
        'G#3': 'Gs3.ogg',
        'G#4': 'Gs4.ogg',
        'G#5': 'Gs5.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',
        'A#3': 'As3.ogg',
        'A#4': 'As4.ogg',
        'B3': 'B3.ogg',
        'B4': 'B4.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C#3': 'Cs3.ogg',
        'C#4': 'Cs4.ogg',
        'C#5': 'Cs5.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D5': 'D5.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',

    },

    'trombone': {
        'A#3': 'As3.ogg',
        'C3': 'C3.ogg',
        'C4': 'C4.ogg',
        'C#2': 'Cs2.ogg',
        'C#4': 'Cs4.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D#2': 'Ds2.ogg',
        'D#3': 'Ds3.ogg',
        'D#4': 'Ds4.ogg',
        'F2': 'F2.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'G#2': 'Gs2.ogg',
        'G#3': 'Gs3.ogg',
        'A#1': 'As1.ogg',
        'A#2': 'As2.ogg',

    },

    'trumpet': {
        'C6': 'C6.ogg',
        'D5': 'D5.ogg',
        'D#4': 'Ds4.ogg',
        'F3': 'F3.ogg',
        'F4': 'F4.ogg',
        'F5': 'F5.ogg',
        'G4': 'G4.ogg',
        'A3': 'A3.ogg',
        'A5': 'A5.ogg',
        'A#4': 'As4.ogg',
        'C4': 'C4.ogg',

    },

    'tuba': {
        'A#2': 'As2.ogg',
        'A#3': 'As3.ogg',
        'D3': 'D3.ogg',
        'D4': 'D4.ogg',
        'D#2': 'Ds2.ogg',
        'F1': 'F1.ogg',
        'F2': 'F2.ogg',
        'F3': 'F3.ogg',
        'A#1': 'As1.ogg',

    },

    'violin': {
        'A3': 'A3.ogg',
        'A4': 'A4.ogg',
        'A5': 'A5.ogg',
        'A6': 'A6.ogg',
        'C4': 'C4.ogg',
        'C5': 'C5.ogg',
        'C6': 'C6.ogg',
        'C7': 'C7.ogg',
        'E4': 'E4.ogg',
        'E5': 'E5.ogg',
        'E6': 'E6.ogg',
        'G4': 'G4.ogg',
        'G5': 'G5.ogg',
        'G6': 'G6.ogg',

    },

    'xylophone': {
        'C8': 'C8.ogg',
        'G4': 'G4.ogg',
        'G5': 'G5.ogg',
        'G6': 'G6.ogg',
        'G7': 'G7.ogg',
        'C5': 'C5.ogg',
        'C6': 'C6.ogg',
        'C7': 'C7.ogg',
    }

}
