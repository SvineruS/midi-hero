export interface Note {
    note: number;
    startTime: number;
    duration: number;

    flashed?: boolean;
    status?: boolean;
}

export interface Instrument {
    notes: Note[]
    name: string;
    number: number;
}
