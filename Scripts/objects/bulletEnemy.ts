//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
 module objects{
    export class BulletEnemy extends objects.GameObject{
      
  
      constructor(){
        super("EnemyBullet");
        this.Start();
      }
  
      public Start():void{
        this._dx=10;
        this._dy=0;
        this.Reset();
  
      }
  
      public Update():void{
        this.x -= this._dx;
        this.CheckBounds();
      }
  
    
      public Reset():void{
        this.x=-5000;
        this.y= -5000;
        
      }
      public Maint():void{
        
      }
      public CheckBounds():void{
        if(this.x <= 0){
            this.Reset();
          }
      }
  
       
      }
    
  }