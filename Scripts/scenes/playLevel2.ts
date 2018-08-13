//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module scenes {
    export class PLayLevelUp extends objects.Scene {
        // member variables
        private _player:objects.Player;
        private _background:objects.Background;
        private _island:objects.Lifeline;
        private _enemy:objects.Enemy[];
        private _enemyNum:number;
        private _exitButton:objects.Button;
        private _score: managers.ScoreBoard;
        private _backButton:objects.Button;
        
       
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._enemyNum; count++) {
                this._enemy.push(new objects.Enemy());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._backButton = new objects.Button("BackButton",600,30,true);

            this._exitButton = new objects.Button("ExitButton",600,30,true);
            this._player = new objects.Player();
            this._background = new objects.Background();
            this._island = new objects.Lifeline();
            this._score = new managers.ScoreBoard();

            // creates an empty array of type Cloud
            this._enemy = new Array<objects.Enemy>();
            this._enemyNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._player.Update();
            this._background.Update();
            this._island.Update();

            managers.Collision.check(this._player, this._island);

            this._enemy.forEach(enemy => {
                enemy.Update();
                managers.Collision.check(this._player, enemy);
            });

            
            if( managers.Game.ScoreBoard.Score >=500)
            {
                  managers.Game.CurrentState = config.Scene.UPGRADE;
            }

            
    }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY Level 2 SCENE`);

            // adding the ocean to the scene
            this.addChild(this._background);

            // adding the island to the scene
            this.addChild(this._island);

            // adding the plane to the scene
            this.addChild(this._player);

            // adding the cloud to the scene
            for (const enemy of this._enemy) {
                this.addChild(enemy);
            }

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
            }, this);

            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
           
            this.addChild(this._backButton);
            console.log(managers.Game.ScoreBoard.HighScore);

            
          
        }
            
        }
    }
