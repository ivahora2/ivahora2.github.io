//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module managers{
    export class BulletEnemy{

        private _bulletCounts:number;

        constructor(){
            this.Start();
        }

    public Bullets:objects.Bullet[];
   
    public CurrentBullet:number;

    private _buildBulletPool():void{

        for (let count = 0; count < this._bulletCounts; count++) {
             this.Bullets[count]=new objects.Bullet();
}
    }

        public Start():void{
            this._bulletCounts=100;
            this.Bullets = new Array<objects.Bullet>();
            this._buildBulletPool();
            this.CurrentBullet=0;

        }

        public Update():void{
            this.Bullets.forEach(bullet =>{
                bullet.UpdateForEnemy();
            });
        }
    }
}