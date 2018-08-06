
//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30

//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    let ScoreBoard: managers.ScoreBoard;

    let Manifest = [
        {id: "ExitButton", src:"/Assets/images/exit.png"},
        {id: "infoButton", src:"/Assets/images/information.png"},
        {id: "intermediateButton", src:"/Assets/images/intermediate.png"},
        {id: "begginerButton", src:"/Assets/images/begginer.png"},
        {id: "restartButton", src:"/Assets/images/restart.png"},
        {id: "BackButton", src:"/Assets/images/back.png"},
        

        {id: "PlayButton", src:"/Assets/images/playButton.png"},
        {id: "StartButton", src:"/Assets/images/StartButton.png"},
        {id: "RestartButton", src:"/Assets/images/RestartButton.png"},
        {id: "player", src:"/Assets/images/minion.png"},
        {id: "background", src:"/Assets/images/background.jpg"},
        {id: "lifeline", src:"/Assets/images/banana.png"},
        {id: "Bullet", src:"/Assets/images/bullet.png"},
        {id: "enemy", src:"/Assets/images/enemy.png"},
        {id: "yay", src:"/Assets/audio/yay.ogg"},
        {id: "thunder", src:"/Assets/audio/thunder.ogg"},
        {id: "engine", src:"/Assets/audio/gameSound.mp3"}
    ]


    function Init():void {
        console.log(`%c Assets Loading...`,"font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start():void {
        console.log(`%c Game Initializing...`,"font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage; // create a reference to the stage class

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.MENU;
        managers.Game.CurrentState = CurrentState;

        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;

        // This is where all the magic happens
        Main();
    }

    function Update():void {
        if(CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();
    }

    function Main():void {
        console.log(`%c Switching Scenes...`,"font-style:italic; font-size:16px; color:blue;");

        if(CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
    
        switch(CurrentState) {
            case config.Scene.MENU:
            CurrentScene = new scenes.Menu();
            break;

            case config.Scene.INFO:
            CurrentScene = new scenes.Info();
            break;

            case config.Scene.LEVEL:
            CurrentScene = new scenes.Play();
            break;

            case config.Scene.START:
            CurrentScene = new scenes.Start();
            break;

            case config.Scene.PLAY:
            CurrentScene = new scenes.PLayLevelUp();
            break;

            case config.Scene.END:
            CurrentScene = new scenes.End();
            break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();