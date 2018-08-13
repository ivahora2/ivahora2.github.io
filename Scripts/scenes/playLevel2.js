var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
//Last Modified by Ishratben Vahora
//Date last Modified -- 2018-07-30
var scenes;
(function (scenes) {
    var PLayLevelUp = /** @class */ (function (_super) {
        __extends(PLayLevelUp, _super);
        // constructors
        function PLayLevelUp() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        PLayLevelUp.prototype._buildClouds = function () {
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy.push(new objects.Enemy());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        PLayLevelUp.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._backButton = new objects.Button("BackButton", 600, 30, true);
            this._exitButton = new objects.Button("ExitButton", 600, 30, true);
            this._player = new objects.Player();
            this._background = new objects.Background();
            this._island = new objects.Lifeline();
            this._score = new managers.ScoreBoard();
            // creates an empty array of type Cloud
            this._enemy = new Array();
            this._enemyNum = 3;
            this._buildClouds();
            this.Main();
        };
        PLayLevelUp.prototype.Update = function () {
            var _this = this;
            this._player.Update();
            this._background.Update();
            this._island.Update();
            managers.Collision.check(this._player, this._island);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.check(_this._player, enemy);
            });
            if (managers.Game.ScoreBoard.Score >= 500) {
                managers.Game.CurrentState = config.Scene.UPGRADE;
            }
        };
        PLayLevelUp.prototype.Reset = function () {
        };
        PLayLevelUp.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        PLayLevelUp.prototype.Main = function () {
            console.log("Starting - PLAY Level 2 SCENE");
            // adding the ocean to the scene
            this.addChild(this._background);
            // adding the island to the scene
            this.addChild(this._island);
            // adding the plane to the scene
            this.addChild(this._player);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._enemy; _i < _a.length; _i++) {
                var enemy = _a[_i];
                this.addChild(enemy);
            }
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._backButton);
            console.log(managers.Game.ScoreBoard.HighScore);
        };
        return PLayLevelUp;
    }(objects.Scene));
    scenes.PLayLevelUp = PLayLevelUp;
})(scenes || (scenes = {}));
//# sourceMappingURL=playLevel2.js.map