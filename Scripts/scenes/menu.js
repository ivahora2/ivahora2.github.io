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
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        // constructors
        function Menu() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Menu.prototype.Start = function () {
            this._background = new objects.Background();
            this._infoButton = new objects.Button("infoButton", 40, 30, true);
            this._exitButton = new objects.Button("ExitButton", 600, 30, true);
            this._welcomeLabel = new objects.Label("Internet War!", "80px", "Ink Free", "#000000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("PlayButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        Menu.prototype.Update = function () {
            this._background.Update();
        };
        Menu.prototype.Reset = function () {
        };
        Menu.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Menu.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._background);
            this.addChild(this._infoButton);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            this._infoButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INFO;
            }, this);
            this._exitButton.on("click", function () {
                window.close();
            }, this);
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map