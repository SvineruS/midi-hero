import {Timidity} from "./timidity";

export class SongPlayer2 {
    private player: any;
    private playing: boolean = false;

    constructor(
        public midi: string,
        public startTime: number,
    ) {
        this.player = new Timidity("/src/song/player-timidity/timidity/files");
    };

    async load() {
        this.player.load(this.midi);
    };
    play() {
        console.log("play")
        this.player.play();
        this.playing = true;
    };
    stop(): void {
        // todo
        this.player.pause();
        this.playing = false;
    }
    isPlaying(): boolean {
        return this.playing;
    }
    audioTime(): number {
        return this.player.currentTime + this.startTime;
    }
}
