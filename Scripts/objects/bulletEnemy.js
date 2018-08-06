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
    var BulletEnemy = /** @class */ (function (_super) {
        __extends(BulletEnemy, _super);
        function BulletEnemy() {
            var _this = _super.call(this, "EnemyBullet") || this;
            _this.Start();
            return _this;
        }
        BulletEnemy.prototype.Start = function () {
            this._dx = 10;
            this._dy = 0;
            this.Reset();
        };
        BulletEnemy.prototype.Update = function () {
            this.x -= this._dx;
            this.CheckBounds();
        };
        BulletEnemy.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        BulletEnemy.prototype.Maint = function () {
        };
        BulletEnemy.prototype.CheckBounds = function () {
            if (this.x <= 0) {
                this.Reset();
            }
        };
        return BulletEnemy;
    }(objects.GameObject));
    objects.BulletEnemy = BulletEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=bulletEnemy.js.map