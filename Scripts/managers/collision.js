//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
//Last Modified by Ishratben Vahora
//Date last Modified -- 2018-07-30
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight - 30) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    console.log("1");
                    if (object1.name == "player") {
                        switch (object2.name) {
                            case "lifeline":
                                var yaySound = createjs.Sound.play("yay");
                                yaySound.volume = 0.2;
                                managers.Game.ScoreBoard.Score += 100;
                                break;
                            case "enemy":
                                var thunderSound = createjs.Sound.play("thunder");
                                thunderSound.volume = 0.2;
                                managers.Game.ScoreBoard.Lives -= 1;
                                break;
                            case "Bullet":
                                thunderSound = createjs.Sound.play("thunder");
                                thunderSound.volume = 0.2;
                                managers.Game.ScoreBoard.Lives -= 1;
                                console.log("player- bullet collision");
                                break;
                        }
                    }
                    else {
                        switch (object2.name) {
                            case "Bullet":
                                managers.Game.ScoreBoard.Score += 200;
                                object1.Reset();
                                console.log("enemy bullet");
                                break;
                        }
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map