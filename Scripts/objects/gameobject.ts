//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // member variables
        protected _dx:number;
        protected _dy:number;


        public width:number;
        
        public height:number;
        public halfWidth:number;
        public halfHeight:number;
        public isColliding:boolean;

        // constructors
        constructor(imageString:string) {
            super(managers.Game.AssetManager.getResult(imageString));

            this.name = imageString;
            this._initialize();


        }

        // private methods


        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
        }

        // public methods
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }

        public Disappear():void{

        }
    }
}