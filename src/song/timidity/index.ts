/*! timidity. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
import Debug from 'debug';
import { EventEmitter } from 'events';
import LibTimidity from './libtimidity.js';

const debug = Debug('timidity');
const debugVerbose = Debug('timidity:verbose');

// Inlined at build time by 'brfs' browserify transform
const TIMIDITY_CFG = `
drumset 0

 25\tDrum_000/025_Snare_Roll.pat 
 26\tDrum_000/026_Snap.pat 
 27\tDrum_000/027_High_Q.pat 
 31\tDrum_000/031_Sticks.pat 
 32\tDrum_000/032_Square_Click.pat 
 33\tDrum_000/033_Metronome_Click.pat 
 34\tDrum_000/034_Metronome_Bell.pat 
 35\tDrum_000/035_Kick_1.pat amp=100
 36\tDrum_000/036_Kick_2.pat amp=100
 37\tDrum_000/037_Stick_Rim.pat 
 38\tDrum_000/038_Snare_1.pat 
 39\tDrum_000/039_Clap_Hand.pat amp=100
 40\tDrum_000/040_Snare_2.pat 
 41\tDrum_000/041_Tom_Low_2.pat amp=100
 42\tDrum_000/042_Hi-Hat_Closed.pat 
 43\tDrum_000/043_Tom_Low_1.pat amp=100
 44\tDrum_000/044_Hi-Hat_Pedal.pat 
 45\tDrum_000/045_Tom_Mid_2.pat amp=100
 46\tDrum_000/046_Hi-Hat_Open.pat 
 47\tDrum_000/047_Tom_Mid_1.pat amp=100
 48\tDrum_000/048_Tom_High_2.pat amp=100
 49\tDrum_000/049_Cymbal_Crash_1.pat 
 50\tDrum_000/050_Tom_High_1.pat amp=100
 51\tDrum_000/051_Cymbal_Ride_1.pat 
 52\tDrum_000/052_Cymbal_Chinese.pat 
 53\tDrum_000/053_Cymbal_Ride_Bell.pat amp=100
 54\tDrum_000/054_Tombourine.pat 
 55\tDrum_000/055_Cymbal_Splash.pat 
 56\tDrum_000/056_Cow_Bell.pat 
 57\tDrum_000/057_Cymbal_Crash_2.pat 
 58\tDrum_000/058_Vibra-Slap.pat 
 59\tDrum_000/059_Cymbal_Ride_2.pat 
 60\tDrum_000/060_Bongo_High.pat 
 61\tDrum_000/061_Bongo_Low.pat 
 62\tDrum_000/062_Conga_High_1_Mute.pat 
 63\tDrum_000/063_Conga_High_2_Open.pat 
 64\tDrum_000/064_Conga_Low.pat 
 65\tDrum_000/065_Timbale_High.pat 
 66\tDrum_000/066_Timbale_Low.pat 
 67\tDrum_000/067_Agogo_High.pat 
 68\tDrum_000/068_Agogo_Low.pat 
 69\tDrum_000/069_Cabasa.pat amp=100
 70\tDrum_000/070_Maracas.pat 
 71\tDrum_000/071_Whistle_1_High_Short.pat 
 72\tDrum_000/072_Whistle_2_Low_Long.pat 
 73\tDrum_000/073_Guiro_1_Short.pat 
 74\tDrum_000/074_Guiro_2_Long.pat 
 75\tDrum_000/075_Claves.pat amp=100
 76\tDrum_000/076_Wood_Block_1_High.pat 
 77\tDrum_000/077_Wood_Block_2_Low.pat 
 78\tDrum_000/078_Cuica_1_Mute.pat amp=100
 79\tDrum_000/079_Cuica_2_Open.pat amp=100
 80\tDrum_000/080_Triangle_1_Mute.pat 
 81\tDrum_000/081_Triangle_2_Open.pat 
 82\tDrum_000/082_Shaker.pat 
 84\tDrum_000/084_Belltree.pat 

bank 0

 0\tTone_000/000_Acoustic_Grand_Piano.pat amp=120 pan=center
 1\tTone_000/001_Acoustic_Brite_Piano.pat 
 2\tTone_000/002_Electric_Grand_Piano.pat 
 4\tTone_000/004_Electric_Piano_1_Rhodes.pat 
 5\tTone_000/005_Electric_Piano_2_Chorused_Yamaha_DX.pat 
 6\tTone_000/006_Harpsichord.pat 
 7\tTone_000/007_Clavinet.pat 
 8\tTone_000/008_Celesta.pat 
 9\tTone_000/009_Glockenspiel.pat 
 13\tTone_000/013_Xylophone.pat 
 14\tTone_000/014_Tubular_Bells.pat 
 15\tTone_000/015_Dulcimer.pat 
 16\tTone_000/016_Hammond_Organ.pat 
 19\tTone_000/019_Church_Organ.pat 
 21\tTone_000/021_Accordion.pat 
 23\tTone_000/023_Tango_Accordion.pat 
 24\tTone_000/024_Nylon_Guitar.pat 
 25\tTone_000/025_Steel_Guitar.pat 
 26\tTone_000/026_Jazz_Guitar.pat 
 27\tTone_000/027_Clean_Electric_Guitar.pat 
 28\tTone_000/028_Muted_Electric_Guitar.pat 
 29\tTone_000/029_Overdriven_Guitar.pat 
 30\tTone_000/030_Distortion_Guitar.pat 
 32\tTone_000/032_Acoustic_Bass.pat 
 33\tTone_000/033_Finger_Bass.pat 
 34\tTone_000/034_Pick_Bass.pat 
 35\tTone_000/035_Fretless_Bass.pat 
 36\tTone_000/036_Slap_Bass_1.pat 
 37\tTone_000/037_Slap_Bass_2.pat 
 38\tTone_000/038_Synth_Bass_1.pat 
 40\tTone_000/040_Violin.pat 
 42\tTone_000/042_Cello.pat 
 44\tTone_000/044_Tremolo_Strings.pat 
 45\tTone_000/045_Pizzicato_Strings.pat 
 46\tTone_000/046_Harp.pat 
 47\tTone_000/047_Timpani.pat 
 48\tTone_000/048_String_Ensemble_1_Marcato.pat 
 53\tTone_000/053_Voice_Oohs.pat 
 56\tTone_000/056_Trumpet.pat 
 57\tTone_000/057_Trombone.pat 
 58\tTone_000/058_Tuba.pat 
 59\tTone_000/059_Muted_Trumpet.pat 
 60\tTone_000/060_French_Horn.pat 
 61\tTone_000/061_Brass_Section.pat 
 64\tTone_000/064_Soprano_Sax.pat 
 65\tTone_000/065_Alto_Sax.pat 
 66\tTone_000/066_Tenor_Sax.pat 
 67\tTone_000/067_Baritone_Sax.pat 
 68\tTone_000/068_Oboe.pat 
 69\tTone_000/069_English_Horn.pat 
 70\tTone_000/070_Bassoon.pat 
 71\tTone_000/071_Clarinet.pat 
 72\tTone_000/072_Piccolo.pat 
 73\tTone_000/073_Flute.pat 
 74\tTone_000/074_Recorder.pat 
 75\tTone_000/075_Pan_Flute.pat 
 76\tTone_000/076_Bottle_Blow.pat 
 79\tTone_000/079_Ocarina.pat 
 80\tTone_000/080_Square_Wave.pat 
 84\tTone_000/084_Charang.pat 
 88\tTone_000/088_New_Age.pat 
 94\tTone_000/094_Halo_Pad.pat 
 95\tTone_000/095_Sweep_Pad.pat 
 98\tTone_000/098_Crystal.pat 
 101\tTone_000/101_Goblins--Unicorn.pat 
 102\tTone_000/102_Echo_Voice.pat 
 104\tTone_000/104_Sitar.pat 
 114\tTone_000/114_Steel_Drums.pat 
 115\tTone_000/115_Wood_Block.pat 
 120\tTone_000/120_Guitar_Fret_Noise.pat 
 122\tTone_000/122_Seashore.pat 
 125\tTone_000/125_Helicopter.pat 

`

const SAMPLE_RATE = 44100;
const AUDIO_FORMAT = 0x8010; // format of the rendered audio 's16'
const NUM_CHANNELS = 2; // stereo (2 channels)
const BYTES_PER_SAMPLE = 2 * NUM_CHANNELS;
const BUFFER_SIZE = 16384; // buffer size for each render() call

const AudioContext = typeof window !== 'undefined' &&
  (window.AudioContext || window.webkitAudioContext);

type LibTimidityType = {
  FS: any; // Replace with actual type if known
  _mid_init: (cfgPath: string) => number;
  _mid_alloc_options: (sampleRate: number, audioFormat: number, numChannels: number, bufferSize: number) => number;
  _mid_song_load: (iStreamPtr: number, optsPtr: number) => number;
  _mid_istream_open_mem: (ptr: number, length: number) => number;
  _mid_istream_close: (iStreamPtr: number) => void;
  _mid_song_start: (songPtr: number) => void;
  _mid_song_free: (songPtr: number) => void;
  _mid_song_seek: (songPtr: number, timeMs: number) => void;
  _mid_song_get_time: (songPtr: number) => number;
  _mid_song_get_total_time: (songPtr: number) => number;
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  HEAPU8: Uint8Array;
  HEAP16: Int16Array;
  UTF8ToString: (ptr: number) => string;
};

export class Timidity extends EventEmitter {
  private destroyed: boolean;
  private _baseUrl: string;
  private _ready: boolean;
  private _playing: boolean;
  private _pendingFetches: Record<string, Promise<Uint8Array>>;
  private _songPtr: number;
  private _bufferPtr: number;
  private _array: Int16Array;
  private _currentUrlOrBuf: string | Uint8Array | null;
  private _interval: NodeJS.Timer | null;
  private _audioContext: AudioContext;
  private _node: ScriptProcessorNode | null;
  private _lib: LibTimidityType | null;

  constructor(baseUrl: string = '/') {
    super();

    this.destroyed = false;

    if (!baseUrl.endsWith('/')) baseUrl += '/';
    this._baseUrl = new URL(baseUrl, window.location.origin).href;

    this._ready = false;
    this._playing = false;
    this._pendingFetches = {}; // instrument -> fetch
    this._songPtr = 0;
    this._bufferPtr = 0;
    this._array = new Int16Array(BUFFER_SIZE * 2);
    this._currentUrlOrBuf = null; // currently loading url or buf
    this._interval = null;

    this._startInterval = this._startInterval.bind(this);
    this._stopInterval = this._stopInterval.bind(this);

    // If the Timidity constructor was not invoked inside a user-initiated event
    // handler, then the AudioContext will be suspended. See:
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    this._audioContext = new AudioContext();

    // Start the 'onaudioprocess' events flowing
    this._node = this._audioContext.createScriptProcessor(
      BUFFER_SIZE,
      0,
      NUM_CHANNELS
    );
    this._onAudioProcess = this._onAudioProcess.bind(this);
    this._node.addEventListener('audioprocess', this._onAudioProcess);
    this._node.connect(this._audioContext.destination);

    LibTimidity({
      locateFile: (file: string) => new URL(file, this._baseUrl).href
    }).then((lib: LibTimidityType) => {
      this._lib = lib;
      this._onLibReady();
    });
  }

  private _onLibReady() {
    if (!this._lib) return;

    this._lib.FS.writeFile('/timidity.cfg', TIMIDITY_CFG);

    const result = this._lib._mid_init('/timidity.cfg');
    if (result !== 0) {
      return this._destroy(new Error('Failed to initialize libtimidity'));
    }

    this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE);

    debugVerbose('Initialized libtimidity');
    this._ready = true;
    this.emit('_ready');
  }

  async load(urlOrBuf: string | Uint8Array) {
    debug('load %o', urlOrBuf);
    if (this.destroyed) throw new Error('load() called after destroy()');

    // If the Timidity constructor was not invoked inside a user-initiated event
    // handler, then the AudioContext will be suspended. Attempt to resume it.
    this._audioContext.resume();

    // If a song already exists, destroy it before starting a new one
    if (this._songPtr) this._destroySong();

    this.emit('unstarted');
    this._stopInterval();

    if (!this._ready) return this.once('_ready', () => this.load(urlOrBuf));

    this.emit('buffering');

    // Save the url or buf to load. Allows detection of when a new interleaved
    // load() starts so we can abort this load.
    this._currentUrlOrBuf = urlOrBuf;

    let midiBuf: Uint8Array;
    if (typeof urlOrBuf === 'string') {
      midiBuf = await this._fetch(new URL(urlOrBuf, this._baseUrl));
      // If another load() started while awaiting, abort this load
      if (this._currentUrlOrBuf !== urlOrBuf) return;
    } else if (urlOrBuf instanceof Uint8Array) {
      midiBuf = urlOrBuf;
    } else {
      throw new Error('load() expects a `string` or `Uint8Array` argument');
    }

    let songPtr = this._loadSong(midiBuf);

    // Are we missing instrument files?
    let missingCount = this._lib._mid_get_load_request_count(songPtr);
    if (missingCount > 0) {
      let missingInstruments = this._getMissingInstruments(songPtr, missingCount);
      debugVerbose('Fetching instruments: %o', missingInstruments);

      // Wait for all instruments to load
      await Promise.all(
        missingInstruments.map(instrument => this._fetchInstrument(instrument))
      );

      // If another load() started while awaiting, abort this load
      if (this._currentUrlOrBuf !== urlOrBuf) return;

      // Retry the song load, now that instruments have been loaded
      this._lib._mid_song_free(songPtr);
      songPtr = this._loadSong(midiBuf);

      // Are we STILL missing instrument files? Then our General MIDI soundset
      // is probably missing instrument files.
      missingCount = this._lib._mid_get_load_request_count(songPtr);

      // Print out missing instrument names
      if (missingCount > 0) {
        missingInstruments = this._getMissingInstruments(songPtr, missingCount);
        debug('Playing with missing instruments: %o', missingInstruments);
      }
    }

    this._songPtr = songPtr;
    this._lib._mid_song_start(this._songPtr);
    debugVerbose('Song and instruments are loaded');
  }

  private _getMissingInstruments(songPtr: number, missingCount: number): string[] {
    const missingInstruments: string[] = [];
    for (let i = 0; i < missingCount; i++) {
      const instrumentPtr = this._lib._mid_get_load_request(songPtr, i);
      const instrument = this._lib.UTF8ToString(instrumentPtr);
      missingInstruments.push(instrument);
    }
    return missingInstruments;
  }

  private _loadSong(midiBuf: Uint8Array): number {
    if (!this._lib) throw new Error('libtimidity is not loaded');

    const optsPtr = this._lib._mid_alloc_options(
      SAMPLE_RATE,
      AUDIO_FORMAT,
      NUM_CHANNELS,
      BUFFER_SIZE
    );

    // Copy the MIDI buffer into the heap
    const midiBufPtr = this._lib._malloc(midiBuf.byteLength);
    this._lib.HEAPU8.set(midiBuf, midiBufPtr);

    // Create a stream
    const iStreamPtr = this._lib._mid_istream_open_mem(midiBufPtr, midiBuf.byteLength);

    // Load the song
    const songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr);

    // Free resources no longer needed
    this._lib._mid_istream_close(iStreamPtr);
    this._lib._free(optsPtr);
    this._lib._free(midiBufPtr);

      if (songPtr === 0) {
          return this._destroy(new Error('Failed to load MIDI file'));
      }

      return songPtr;
  }

    private async _fetchInstrument(instrument: string): Promise<Uint8Array> {
        if (this._pendingFetches[instrument]) {
            // If this instrument is already in the process of being fetched, return
            // the existing promise to prevent duplicate fetches.
            return this._pendingFetches[instrument];
        }

        const url = new URL(instrument, this._baseUrl);
        const bufPromise = this._fetch(url);
        this._pendingFetches[instrument] = bufPromise;

        const buf = await bufPromise;
        this._writeInstrumentFile(instrument, buf);

        delete this._pendingFetches[instrument];

        return buf;
    }

    private _writeInstrumentFile(instrument: string, buf: Uint8Array): void {
        const folderPath = instrument
            .split('/')
            .slice(0, -1) // remove basename
            .join('/');
        this._mkdirp(folderPath);
        this._lib.FS.writeFile(instrument, buf, { encoding: 'binary' });
    }

    private _mkdirp(folderPath: string): void {
        const pathParts = folderPath.split('/');
        let dirPath = '/';
        for (const curPart of pathParts) {
            try {
                this._lib.FS.mkdir(`${dirPath}${curPart}`);
            } catch (err) {}
            dirPath += `${curPart}/`;
        }
    }

    private async _fetch(url: URL): Promise<Uint8Array> {
        const opts: RequestInit = {
            mode: 'cors',
            credentials: 'same-origin'
        };
        const response = await window.fetch(url.toString(), opts);
        if (response.status !== 200) throw new Error(`Could not load ${url}`);

        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
    }

    public play(): void {
        debug('play');
        if (this.destroyed) throw new Error('play() called after destroy()');

        // If the Timidity constructor was not invoked inside a user-initiated event
        // handler, then the AudioContext will be suspended. Attempt to resume it.
        this._audioContext.resume();

        this._playing = true;
        if (this._ready && !this._currentUrlOrBuf) {
            this.emit('playing');
            this._startInterval();
        }
    }

    private _onAudioProcess(event: AudioProcessingEvent): void {
        const sampleCount = (this._songPtr && this._playing)
            ? this._readMidiData()
            : 0;

        if (sampleCount > 0 && this._currentUrlOrBuf) {
            this._currentUrlOrBuf = null;
            this.emit('playing');
            this._startInterval();
        }

        const output0 = event.outputBuffer.getChannelData(0);
        const output1 = event.outputBuffer.getChannelData(1);

        for (let i = 0; i < sampleCount; i++) {
            output0[i] = this._array[i * 2] / 0x7FFF;
            output1[i] = this._array[i * 2 + 1] / 0x7FFF;
        }

        for (let i = sampleCount; i < BUFFER_SIZE; i++) {
            output0[i] = 0;
            output1[i] = 0;
        }

        if (this._songPtr && this._playing && sampleCount === 0) {
            // Reached the end of the file
            this.seek(0);
            this.pause();
            this._lib._mid_song_start(this._songPtr);
            this.emit('ended');
        }
    }

    private _readMidiData(): number {
        if (!this._lib) throw new Error('libtimidity is not loaded');

        const byteCount = this._lib._mid_song_read_wave(
            this._songPtr,
            this._bufferPtr,
            BUFFER_SIZE * BYTES_PER_SAMPLE
        );
        const sampleCount = byteCount / BYTES_PER_SAMPLE;

        // Was anything output? If not, don't bother copying anything
        if (sampleCount === 0) {
            return 0;
        }

        this._array.set(
            this._lib.HEAP16.subarray(this._bufferPtr / 2, (this._bufferPtr + byteCount) / 2)
        );

        return sampleCount;
    }

    public pause(): void {
        debug('pause');
        if (this.destroyed) throw new Error('pause() called after destroy()');

        this._playing = false;
        this._stopInterval();
        this.emit('paused');
    }

    public seek(time: number): void {
        debug('seek %d', time);
        if (this.destroyed) throw new Error('seek() called after destroy()');
        if (!this._songPtr) return; // ignore seek if there is no song loaded yet

        const timeMs = Math.floor(time * 1000);
        this._lib._mid_song_seek(this._songPtr, timeMs);
        this._onTimeupdate();
    }

    public get currentTime(): number {
        if (this.destroyed || !this._songPtr) return 0;
        return this._lib._mid_song_get_time(this._songPtr) / 1000;
    }

    public get duration(): number {
        if (this.destroyed || !this._songPtr) return 1;
        return this._lib._mid_song_get_total_time(this._songPtr) / 1000;
    }

    /**
     * This event fires when the time indicated by the `currentTime` property
     * has been updated.
     */
    private _onTimeupdate(): void {
        this.emit('timeupdate', this.currentTime);
    }

    private _startInterval(): void {
        this._onTimeupdate();
        this._interval = setInterval(() => this._onTimeupdate(), 1000);
    }

    private _stopInterval(): void {
        this._onTimeupdate();
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }

    public destroy(): void {
        debug('destroy');
        if (this.destroyed) throw new Error('destroy() called after destroy()');
        this._destroy();
    }

    private _destroy(err?: Error): void {
        if (this.destroyed) return;
        this.destroyed = true;

        this._stopInterval();

        this._array = null;

        if (this._songPtr) {
            this._destroySong();
        }

        if (this._bufferPtr) {
            this._lib._free(this._bufferPtr);
            this._bufferPtr = 0;
        }

        if (this._node) {
            this._node.disconnect();
            this._node.removeEventListener('audioprocess', this._onAudioProcess);
        }

        if (this._audioContext) {
            this._audioContext.close();
        }

        if (err) this.emit('error', err);
        debug('destroyed (err %o)', err);
    }

    private _destroySong(): void {
        if (!this._lib) return;
        this._lib._mid_song_free(this._songPtr);
        this._songPtr = 0;
    }
}

export default Timidity;
