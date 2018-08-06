//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static ScoreBoard:managers.ScoreBoard;
        public static bulletManager:managers.Bullet;
        public static bulletManagerEnemy:managers.BulletEnemy;
        public static keyboardManager:managers.Keyboard;
    }
}