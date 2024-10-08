import {Timidity} from "./timidity";

export class SongPlayer2 {
    private player: any;
    private playing: boolean = false;

    constructor(
        public midi: string,
        public startTime: number,
        timidityPath: string
    ) {
        this.player = new Timidity(timidityPath);
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
    rawAudioTime(): number {
        return this.player.currentTime
    }
}
