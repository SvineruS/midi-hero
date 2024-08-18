import {Timidity} from "./timidity/index.ts";

export class SongPlayer2 {
    private player: any;
    private playing: boolean = false;

    constructor(public midi: string) {
        this.player = new Timidity("/src/song/timidity/files");
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
        this.player.stop();
        this.playing = false;
    }
    isPlaying(): boolean {
        return this.playing;
    }
    audioTime(): number {
        // console.log("current time", this.player.currentTime)
        return this.player.currentTime;
    }
}
