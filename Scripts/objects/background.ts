//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
namespace objects {
  export class Background extends createjs.Bitmap {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Ocean.
     * @memberof Background
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("background"));

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check top boundary
      if (this.x <=-((config.Screen.WIDTH)*2)) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._horizontalSpeed = -3; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.x += this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x =0;
    }
  }
}
