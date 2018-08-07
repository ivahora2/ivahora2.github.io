//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module scenes {
    export class LevelUpgrade3 extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _ocean: objects.Background;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ocean = new objects.Background();

            this._gameOverLabel = new objects.Label("Level Upgraded", "60px", "Ink Free", "#000000", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("restartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            

            this.addChild(this._ocean);

            this.addChild(this._gameOverLabel);

            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

            setTimeout(function(){
                managers.Game.CurrentState = config.Scene.LEVEL3;
            },2000);

         
        }
    }
}