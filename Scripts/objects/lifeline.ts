//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 
 namespace objects {
  export class Island extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("lifeline");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x > config.Screen.WIDTH + this.halfWidth) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = 5;
      this.Reset();
    }

    public Update(): void {
      this.x += this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.y = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);//-this.height;
      this.x = -this.width;//Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
    }
  }
}
