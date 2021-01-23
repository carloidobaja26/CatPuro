import { Scene, ActionManager, ExecuteCodeAction, Observer, Scalar, Sound } from '@babylonjs/core';
export class SoundEffect {
    private _scene: Scene;
    //Sounds
    public quitSfx: Sound;
    private _sfx: Sound;
    private _pause: Sound;
    private _game: Sound;
    private _end: Sound;
    private _sparkWarningSfx: Sound;
    constructor(scene: Scene) {

    }
    //load all sounds needed for game ui interactions
    public _loadSounds(scene: Scene): void {

    }
    public _pauseSound(scene: Scene): void {
        this._pause = new Sound("pauseSong", "./sounds/Snowland.wav", scene, function () {
        }, {
            volume: 0.2,
            loop: true,
        });
    }
    public _sfxSound (scene: Scene): void {
        this._sfx = new Sound("selection", "./sounds/vgmenuselect.wav", scene, function () {
        });
    }
    public _gameMusic(scene: Scene): void {
        this._game = new Sound("gameSong", "./sounds/Christmassynths.wav", scene, function () {
        }, {
            loop:true,
            volume: 0.1,
        });
    }
    public _quitSound(scene: Scene): void {
        this.quitSfx = new Sound("quit", "./sounds/Retro Event UI 13.wav", scene, function () {
        });
    }
    public _warningSpark(scene: Scene): void {
        this._sparkWarningSfx = new Sound("sparkWarning", "./sounds/Retro Water Drop 01.wav", scene, function () {
        }, {
            loop: true,
            volume: 0.5,
            playbackRate: 0.6
        });
    }
    public _endMusic (scene: Scene): void {
        this._end = new Sound("endSong", "./sounds/copycat(revised).mp3", scene, function () {
        }, {
            volume: 0.25
        });
    }
    public _startMusic (scene: Scene): void {
        this._end = new Sound("startmusic", "./sounds/copycat(revised).mp3", scene, function () {
        }, {
            volume: 0.25,
            autoplay: true,
            loop: true
        });
    }
}