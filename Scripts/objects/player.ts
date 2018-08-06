//Source file name  
//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30

namespace objects {
    export class Player extends objects.GameObject {
        private _bulletSpawn: math.Vec2;
        private _bullets:objects.Bullet;
        /**
         * Creates an instance of Plane.
         * @memberof Player
         */
        constructor() {
            super("player");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check right boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }

            // check left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 100;
            this._bulletSpawn = new math.Vec2();
        }

        public Update(): void {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
            this.BulletFire();
        }

        public Reset(): void { }

        public BulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();
            

            if ((ticker % 10 == 0) && (managers.Game.keyboardManager.fire)) {
                this._bulletSpawn = new math.Vec2(this.x, this.y);
                let currentBullet = managers.Game.bulletManager.CurrentBullet;

                let bullet = managers.Game.bulletManager.Bullets[currentBullet];
                bullet.x = this._bulletSpawn.x;
                bullet.y = this._bulletSpawn.y;

                managers.Game.bulletManager.CurrentBullet++;

                if (managers.Game.bulletManager.CurrentBullet > 49) {
                    managers.Game.bulletManager.CurrentBullet = 0;
                }

                console.log("bulletFired");
            } 
        }
    }
}
