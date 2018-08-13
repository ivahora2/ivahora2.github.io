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
    var Info = /** @class */ (function (_super) {
        __extends(Info, _super);
        // constructors
        function Info() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Info.prototype.Start = function () {
            this._background = new objects.Background();
            this._infoButton = new objects.Button("infoButton", 40, 30, true);
            this._backButton = new objects.Button("BackButton", 600, 30, true);
            this._welcomeLabel = new objects.Label("You are in the SPACE WAR!", "35px", "Ink Free", "#000", 300, 80, true);
            this._infoLabel = new objects.Label("Level 1", "28px", "Ink Free", "#000", 300, 140, true);
            this._infoLabel1 = new objects.Label("Save yourself from the other fighter \njets by scrolling up and down using mouse", "25px", "Ink Free", "#000", 320, 200, true);
            this._infoLabel2 = new objects.Label("Level 2 ", "28px", "Ink Free", "#000", 300, 260, true);
            this._infoLabel3 = new objects.Label("Press the space bar to fire \n bullets and kill the enemy ", "25px", "Ink Free", "#000", 300, 320, true);
            this._infoLabel4 = new objects.Label("Level 3", "28px", "Ink Free", "#000", 300, 370, true);
            this._infoLabel5 = new objects.Label("Beware now the enemies \nare firing at you too.", "25px", "Ink Free", "#000", 320, 420, true);
            this.Main();
        };
        Info.prototype.Update = function () {
        };
        Info.prototype.Reset = function () {
        };
        Info.prototype.Destroy = function () {
        };
        Info.prototype.Main = function () {
            console.log("Starting - INFO SCENE");
            this.addChild(this._background);
            this.addChild(this._infoButton);
            this.addChild(this._welcomeLabel);
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel1);
            this.addChild(this._infoLabel2);
            this.addChild(this._infoLabel3);
            this.addChild(this._infoLabel4);
            this.addChild(this._infoLabel5);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return Info;
    }(objects.Scene));
    scenes.Info = Info;
})(scenes || (scenes = {}));
//# sourceMappingURL=info.js.map