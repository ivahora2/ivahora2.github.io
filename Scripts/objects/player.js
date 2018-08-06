//Source file name  
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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Player
         */
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Player.prototype._checkBounds = function () {
            // check right boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 100;
            this._bulletSpawn = new math.Vec2();
        };
        Player.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
            this.BulletFire();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.BulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            if ((ticker % 10 == 0) && (managers.Game.keyboardManager.fire)) {
                this._bulletSpawn = new math.Vec2(this.x, this.y);
                var currentBullet = managers.Game.bulletManager.CurrentBullet;
                var bullet = managers.Game.bulletManager.Bullets[currentBullet];
                bullet.x = this._bulletSpawn.x;
                bullet.y = this._bulletSpawn.y;
                managers.Game.bulletManager.CurrentBullet++;
                if (managers.Game.bulletManager.CurrentBullet > 49) {
                    managers.Game.bulletManager.CurrentBullet = 0;
                }
                console.log("bulletFired");
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map