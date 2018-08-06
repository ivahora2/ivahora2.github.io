//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module scenes {
    export class Menu extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _infoButton:objects.Button;
        private _exitButton:objects.Button;
        private _background: objects.Background;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._background = new objects.Background();
            this._infoButton = new objects.Button("infoButton",40,30,true);
            this._exitButton = new objects.Button("ExitButton",600,30,true);
            this._welcomeLabel = new objects.Label("Me..Me.Minion", "80px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("PlayButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._background.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._background);
            this.addChild(this._infoButton);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._exitButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
            }, this);

            this._infoButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INFO;
            }, this);

            this._exitButton.on("click", function(){
                window.close();
            }, this);
        }
    }
}