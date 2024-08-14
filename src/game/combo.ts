import { createText, text1 } from "../3d/3d.ts";


const COMBO_SCORES = [1, 2, 4, 8]


export class Combo {
    hits = 0;
    fails = 0;
    combo = 0;
    score = 0;


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
}
