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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildEnemies = function () {
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy.push(new objects.Enemy());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._backButton = new objects.Button("BackButton", 600, 30, true);
            this._player = new objects.Player();
            this._background = new objects.Background();
            this._island = new objects.Island();
            this._bulletManger = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManger;
            // creates an empty array of type Cloud
            this._enemy = new Array();
            this._enemyNum = 7;
            this._buildEnemies();
            this._keyboardManager = new managers.Keyboard();
            managers.Game.keyboardManager = this._keyboardManager;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            console.log("Num objects: " + this.numChildren);
            this._player.Update();
            this._background.Update();
            this._island.Update();
            this._bulletManger.Update();
            managers.Collision.check(this._player, this._island);
            this.nextLevel();
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.check(_this._player, enemy);
            });
            this._bulletManger.Bullets.forEach(function (bullets) {
                bullets.Update();
                _this._enemy.forEach(function (enemy) {
                    managers.Collision.check(enemy, bullets);
                });
            });
            /*var score=managers.Game.ScoreBoard.ScoreLabel.text.toString();
            this._score=+score;
 
             if(this._score>200)
             {
                 managers.Game.CurrentState = config.Scene.LEVEL;
             }*/
        };
        Play.prototype.nextLevel = function () {
            var score = managers.Game.ScoreBoard.ScoreLabel.text.toString();
            this._score = +score;
            if (this._score > 200) {
                managers.Game.CurrentState = config.Scene.PLAY;
            }
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            var _this = this;
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._background);
            // adding the island to the scene
            this.addChild(this._island);
            // adding the plane to the scene
            this.addChild(this._player);
            this._bulletManger.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._enemy; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._backButton);
            /*var score=managers.Game.ScoreBoard.ScoreLabel.text.toString();
            this._score=+score;
 
             if(this._score>200)
             {
                 managers.Game.CurrentState = config.Scene.LEVEL;
             }*/
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map