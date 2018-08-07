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
    var LevelUpgrade3 = /** @class */ (function (_super) {
        __extends(LevelUpgrade3, _super);
        // constructors
        function LevelUpgrade3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        LevelUpgrade3.prototype.Start = function () {
            this._ocean = new objects.Background();
            this._gameOverLabel = new objects.Label("Level Upgraded", "60px", "Ink Free", "#000000", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("restartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        LevelUpgrade3.prototype.Update = function () {
            this._ocean.Update();
        };
        LevelUpgrade3.prototype.Reset = function () {
        };
        LevelUpgrade3.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        LevelUpgrade3.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            setTimeout(function () {
                managers.Game.CurrentState = config.Scene.LEVEL3;
            }, 2000);
        };
        return LevelUpgrade3;
    }(objects.Scene));
    scenes.LevelUpgrade3 = LevelUpgrade3;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelUpgrade3.js.map