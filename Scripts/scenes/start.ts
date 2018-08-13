//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _startButton2: objects.Button;
        private _startButton3: objects.Button;
        private _ocean: objects.Background;
        private _backButton:objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._ocean = new objects.Background();

            this._welcomeLabel = new objects.Label("Space War!", "80px", "Ink Free", "#000000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("begginerButton", config.Screen.HALF_WIDTH, 360, true);
            this._startButton2 = new objects.Button("intermediateButton", config.Screen.HALF_WIDTH, 400, true);
            this._startButton3 = new objects.Button("expertButton", config.Screen.HALF_WIDTH, 440, true);
            this._backButton = new objects.Button("BackButton",600,30,true);

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
            console.log(`Starting - START SCENE`);
            this.addChild(this._ocean);

            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._startButton2);
            this.addChild(this._startButton3);
            this.addChild(this._backButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._startButton2.on("click", function(){
                managers.Game.CurrentState = config.Scene.LEVEL;
            }, this);

            this._startButton3.on("click", function(){
                managers.Game.CurrentState = config.Scene.LEVEL3;
            }, this);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        }
    }
}