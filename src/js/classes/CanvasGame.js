import Player from './Player';

export default class CanvasGame{
    constructor( assets ){
        this.gameCont = document.querySelector('#InitBBVAGame');
        this.canvas = document.createElement('canvas');
        this.assets = assets;
        this.context;
        this.hero;
        this.floor;
        this.center;
        this.contWidth = 0;
        this.contHeight = 0;
        this.zombies = [];
        this.zDir = "right";
        this.zombieloop;
    }

    startCanvasGame(){
        this.context = this.canvas.getContext('2d');
        
        this.contWidth = this.gameCont.offsetWidth;
        this.contHeight = this.gameCont.offsetHeight;
        
        this.canvas.width = this.contWidth;
        this.canvas.height = this.contHeight;
        
        this.floor = this.contHeight - 150;
        this.center = this.contWidth / 2;
        
        this.gameCont.appendChild(this.canvas);
        this.animate;
        
        this.hero = new Player(this.assets.hero_right, this.assets.hero_left, 50, this.context, 'Hero');
        this.hero.setPosX( this.center );
        this.hero.setPosY( this.floor - 140 );

        this._zombiesmanager();
        this._addHeroControls();
        this._turnOnEngine();
    }

    _addHeroControls(){
        addEventListener('keydown', (e)=>{
            const hPosX= this.hero.getPosX();
            if(e.key === 'ArrowLeft'){
                this.hero.setDirection('left');
                this.hero.startRun();
                if(hPosX > 0){
                    this.hero.setPosX(hPosX - 10);
                }
            }
            else if(e.key === 'ArrowRight'){
                this.hero.startRun();
                this.hero.setDirection('right');
                if(hPosX < this.contWidth - 100){
                    this.hero.setPosX(hPosX + 10);
                }
            }
        })
        addEventListener('keyup', e => {
            if(e.key === 'ArrowLeft'){
                this.hero.stopRun();
            }
            else if(e.key === 'ArrowRight'){
                this.hero.stopRun();
            }
        })
    }

    _zombiesmanager(){
        this.zombieloop = setInterval(() => {
            if(this.zombies.length < 2){
                let newZombie = new Player(this.assets.zombie_right,this.assets.zombie_left, 10, this.context, "zombie", this.zDir);
                newZombie.setPosY( this.floor - 140 );
                newZombie.setPosX( (this.zDir === "right")? -50 : (this.contWidth + 50) );
                this.zDir = (this.zDir === "right")? "left" : "right";
                console.log(newZombie.getDirection(), 'Zombie direction');
                this.zombies.push(newZombie);
            }
        }, 3000);
    }

    _turnOnEngine(){
        this.context.clearRect(0,0,this.contWidth, this.contWidth);
        this.context.fillStyle = 'black';
        this.context.fillRect(0, this.floor, this.contWidth, 150);
        this.hero.draw();
        
        this.zombies.forEach((zombie, z) => {
            zombie.draw();
            let zPosX = zombie.getPosX();
            const cirrDir = zombie.getDirection();

            if( cirrDir === "right" && zPosX < this.contWidth ){
                zombie.setPosX(zPosX + 2);
            }else if( cirrDir === "right" && zPosX >= this.contWidth){
                this.zombies.splice(z, 1);
            }
            
            if( zombie.getDirection() === "left" && zPosX > -100){
                zombie.setPosX(zPosX - 2);
            }else if( cirrDir === "left" && zPosX <= 0){
                this.zombies.splice(z, 1);
            }

            zombie.startRun();
        });
        this.animate = requestAnimationFrame( () => this._turnOnEngine() );
    }
    
    stopCanvasGame(){
        cancelAnimationFrame(this.animate);
    }
}