//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
//Last Modified by Ishratben Vahora
//Date last Modified -- 2018-07-30
var managers;
(function (managers) {
    var BulletEnemy = /** @class */ (function () {
        function BulletEnemy() {
            this.Start();
        }
        BulletEnemy.prototype._buildBulletPool = function () {
            for (var count = 0; count < this._bulletCounts; count++) {
                this.Bullets[count] = new objects.Bullet();
            }
        };
        BulletEnemy.prototype.Start = function () {
            this._bulletCounts = 100;
            this.Bullets = new Array();
            this._buildBulletPool();
            this.CurrentBullet = 0;
        };
        BulletEnemy.prototype.Update = function () {
            this.Bullets.forEach(function (bullet) {
                bullet.UpdateForEnemy();
            });
        };
        return BulletEnemy;
    }());
    managers.BulletEnemy = BulletEnemy;
})(managers || (managers = {}));
//# sourceMappingURL=bulletEnemy.js.map