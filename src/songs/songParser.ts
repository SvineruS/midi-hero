import { loadDifficulty, TimeProcessor } from "bsmap";
import type { NoteEvent, LightEvent } from "./types.ts";


export function parseDifficultyFile(difficultyFile: string, startBpm: number): { notes: NoteEvent[]; lightEvents: LightEvent[] } {
  const data = loadDifficulty(JSON.parse(difficultyFile));
  const bpm = TimeProcessor.create(startBpm, data.difficulty.customData._bpmChanges)

  const notes = [];
  const lightEvents = [];

  const lastNoteTime = [0, 0, 0, 0]; // per lane (4 lanes)

  for (const colorNote of data.difficulty.colorNotes) {
    const time = bpm.toRealTime(colorNote.time);
    const note = colorNote.posX;
    if (note < 0 || note > 3) continue;

    if (time - lastNoteTime[note] < 0.250) continue;
    lastNoteTime[note] = time;

    notes.push({ time, note, duration: 0.1 });
  }


  for (const background of data.lightshow.basicEvents) {
    if (![0, 1, 2, 3, 4, 6, 7, 11].includes(background.type)) continue;
    if (background.type == 11) background.type = 5;  // 8 possible lights

    const action = parseAction(background.value);

    const realTime = bpm.toRealTime(background.time);
    lightEvents.push({
      time: realTime,
      lightIndex: background.type,
      ...action,
      // actionRaw: background.value,
      // brightness: background.floatValue
    });
  }

  return { notes, lightEvents }
}

function parseAction(action: number) {
  if (action == 0) return { colorI: 0, modeI: 0 };
  action -= 1;
  const modeI = action % 4;  // ["fast-on", "flash-on", "flash-off", "fade-on"];
  const colorI = Math.floor(action / 4) + 1;  // ["black", "red", "blue", "white"];
  return { colorI, modeI };
}

