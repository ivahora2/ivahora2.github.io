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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Cloud
         */
        function Enemy() {
            var _this = _super.call(this, "enemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < -this.width || this.y > config.Screen.HEIGHT + this.height) {
                this.Reset();
            }
        };
        // public methods
        Enemy.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._bulletSpawn = new math.Vec2();
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._checkBounds();
            this.BulletFireEnemy();
        };
        Enemy.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 4) + -2);
            this._horizontalSpeed = Math.floor((Math.random() * 5) + 1);
            this.x = config.Screen.WIDTH;
            this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
        };
        Enemy.prototype.BulletFireEnemy = function () {
            var ticker = createjs.Ticker.getTicks();
            if ((ticker % 150 == 0)) {
                this._bulletSpawn = new math.Vec2(this.x, this.y);
                var currentBullet = managers.Game.bulletManagerEnemy.CurrentBullet;
                var bullet = managers.Game.bulletManagerEnemy.Bullets[currentBullet];
                bullet.x = this._bulletSpawn.x;
                bullet.y = this._bulletSpawn.y;
                managers.Game.bulletManagerEnemy.CurrentBullet++;
                if (managers.Game.bulletManagerEnemy.CurrentBullet > 49) {
                    managers.Game.bulletManagerEnemy.CurrentBullet = 0;
                }
                console.log("Enemy bulletFired");
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map