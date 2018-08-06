//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
namespace objects {
  export class Enemy extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;
    private _bulletSpawn: math.Vec2;
    private _bullets:objects.Bullet;

    /**
     * Creates an instance of Cloud.
     * @memberof Cloud
     */
    constructor() {
      super("enemy");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < -this.width || this.y> config.Screen.HEIGHT + this.height) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._bulletSpawn = new math.Vec2();
      this.Reset();
    }

    public Update(): void {
      this.y += this._verticalSpeed;
      this.x -= this._horizontalSpeed;
      this._checkBounds();

      this.BulletFireEnemy();
    }

    public Reset(): void {
      this._verticalSpeed =  Math.floor((Math.random() * 4) + -2); 
      this._horizontalSpeed = Math.floor((Math.random() * 5) +1); 
      this.x = config.Screen.WIDTH;
      this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
    }

    public BulletFireEnemy(): void {
      let ticker: number = createjs.Ticker.getTicks();
      
      

      if ((ticker % 150 == 0)) {
          this._bulletSpawn = new math.Vec2(this.x, this.y);
         
          let currentBullet = managers.Game.bulletManagerEnemy.CurrentBullet;

          let bullet = managers.Game.bulletManagerEnemy.Bullets[currentBullet];

          bullet.x = this._bulletSpawn.x;
          bullet.y = this._bulletSpawn.y;

          managers.Game.bulletManagerEnemy.CurrentBullet++;

          if (managers.Game.bulletManagerEnemy.CurrentBullet > 49) {
              managers.Game.bulletManagerEnemy.CurrentBullet = 0;
          }

          console.log("Enemy bulletFired");
        
      } 
  }
  }
}
