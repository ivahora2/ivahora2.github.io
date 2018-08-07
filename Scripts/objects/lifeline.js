//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
//Last Modified by Ishratben Vahora
//Date last Modified -- 2018-07-30
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
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Island() {
            var _this = _super.call(this, "lifeline") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Island.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x > config.Screen.WIDTH + this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Island.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        Island.prototype.Update = function () {
            this.x += this._verticalSpeed;
            this._checkBounds();
        };
        Island.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth); //-this.height;
            this.x = -this.width; //Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        Island.prototype.Disappear = function () {
            this.y = -500;
            this.x = -500;
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=lifeline.js.map