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
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        /**
         * Creates an instance of Ocean.
         * @memberof Background
         */
        function Background() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background.prototype._checkBounds = function () {
            // check top boundary
            if (this.x <= -((config.Screen.WIDTH) * 2)) {
                this.Reset();
            }
        };
        // public methods
        Background.prototype.Start = function () {
            this._horizontalSpeed = -3; // 5 pixels per frame
            this.Reset();
        };
        Background.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Background.prototype.Reset = function () {
            this.x = 0;
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map