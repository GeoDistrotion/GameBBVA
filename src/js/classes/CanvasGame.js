import Bullet from './Bullet';
import Player from './Player';

export default class CanvasGame{
    constructor( assets ){
        this.gameCont = document.querySelector('#InitBBVAGame'); // Get the main container
        this.canvas = document.createElement('canvas'); // Init element canvas
        this.assets = assets;  // Get the game assets preloaded
        this.context; // 2D CONTEXT
        this.hero; // Hero cont
        
        this.floor; // Floor parameter
        this.center; // Center param
        
        this.contWidth = 0; // Main container width
        this.contHeight = 0; // Main container height

        this.animate; // Set the window animation frame id
        
        this.zombies = []; // Array to store the zombies objects
        this.zDir = "right"; // Set the current zombie direction
        this.zombieloop; // Set an interval id

        this.bullets = []; // Array to store the bullets objects
    }

    startCanvasGame(){ // Trigger the start game  && set the global conf
        this.context = this.canvas.getContext('2d'); // Init the cotext
        
        this.contWidth = this.gameCont.offsetWidth; // set the maib cont width
        this.contHeight = this.gameCont.offsetHeight; // set the main cont height
        
        this.canvas.width = this.contWidth; // set the canvas width
        this.canvas.height = this.contHeight; // set the canvas height
        
        this.floor = this.contHeight - 150; // set the game floor 
        this.center = this.contWidth / 2; // set the center game
        
        this.gameCont.appendChild(this.canvas); // inject the canvas in the main container
        
        this.hero = new Player(this.assets.hero_right, this.assets.hero_left, 50, this.context, 'Hero'); // Create the hero object
        this.hero.setPosX( this.center ); // set the init hero x pos
        this.hero.setPosY( this.floor - 140 ); // set the init hero y pos 

        this._zombiesmanager(); // start the zombie manager creator
        this._addHeroControls(); // add keyboard events to the hero object
        this._turnOnEngine(); // start the game loop engine;
    }

    _addHeroControls(){
        addEventListener('keydown', (e)=>{ // adding the window keyboard event
            const hPosX = this.hero.getPosX(); // get the hero current x pos
            const hDir = this.hero.getDirection(); // get the hero current direction
            const bulletXOrigin = hDir=='right'? hPosX + 80: hPosX + 40;  // set the origin of the new bullet;
            switch (e.key) {
                case "ArrowLeft": // catch the Arrow left
                    this.hero.setDirection('left'); // set the hero direction to left
                    this.hero.startRun(); // init the run animation to the direction before configured
                    if(hPosX > 0){ // limit the environment to left
                        this.hero.setPosX(hPosX - 10);
                    }    
                    break;
                case "ArrowRight": // catch the arrow right 
                    this.hero.setDirection('right'); // set the hero direction to right
                    this.hero.startRun(); // init the run animation to the direction before configured
                    if(hPosX < this.contWidth - 100){ // limit the environment to right
                        this.hero.setPosX(hPosX + 10);
                    }
                break;
                case " ": // catch the spacebar
                    const newBullet = new Bullet(bulletXOrigin, this.contHeight - 180, hDir,this.context); // create the new bullet
                    this.bullets.push(newBullet); // add the new bullet to the bullets array
                break;
                default:
                    break;
            }
        })
        addEventListener('keyup', e => { // catch the key up event
            switch (e.key) {
                case 'ArrowLeft':
                    this.hero.stopRun(); // stop the run left animation
                    break;
                case 'ArrowRight':
                    this.hero.stopRun(); // stop the run right animation
                    break;
            
                default:
                    break;
            }
        })
    }

    _zombiesmanager(){
        this.zombieloop = setInterval(() => { // start the time interval and add it to the id
            if(this.zombies.length < 3){
                let newZombie = new Player(this.assets.zombie_right,this.assets.zombie_left, 10, this.context, "zombie", this.zDir); // create zombie object
                newZombie.setPosY( this.floor - 140 ); // set the zombir Y pos origin
                newZombie.setPosX( (this.zDir === "right")? -50 : (this.contWidth + 50) ); // set the zombir X pos origin
                this.zDir = (this.zDir === "right")? "left" : "right"; // set the Zombie move direction
                this.zombies.push(newZombie); // add the new zombie to the main zombies array
            }
        }, 1000);
    }

    _turnOnEngine(){
        this.context.clearRect(0,0,this.contWidth, this.contWidth); // clean the stage each iteration
        this.context.fillStyle = 'black'; // set the game floor color
        this.context.fillRect(0, this.floor, this.contWidth, 150); // draw the game floor
        this.hero.draw(); // draw the hero object each iteration
        
        this.zombies.forEach((zombie, z) => { // read each zombie object from the zombie list
            zombie.draw(); // draw the zombie object each iteration
            const zPosX = zombie.getPosX(); // get the current X pos
            const currentZombieDir = zombie.getDirection(); // get the current direction

            if( currentZombieDir === "right" && zPosX < this.contWidth ){ // limit the area
                zombie.setPosX(zPosX + 2);
            }else if( currentZombieDir === "right" && zPosX >= this.contWidth){
                this.zombies.splice(z, 1); // remove the object from the list
            }
            
            if( zombie.getDirection() === "left" && zPosX > -100){ // limit the area
                zombie.setPosX(zPosX - 2);
            }else if( currentZombieDir === "left" && zPosX <= 0){
                this.zombies.splice(z, 1);// remove the object from the list
            }

            /* Collition detector */
            this.bullets.forEach((bullet, b) => {
                const bulletPosX = bullet.getPosX();
                if(bulletPosX > zPosX + 40 && bulletPosX < zPosX + 60){
                    this.zombies.splice(z, 1);
                    this.bullets.splice(b,1);
                }
            });

            zombie.startRun(); // start the animation depending on the zombie direction
        });

        this.bullets.forEach((bullet, b)=>{
            bullet.draw(); // draw the bullet object each iteration
            const bPosX = bullet.getPosX(); 
            const currentBulletDir = bullet.getDirection();
            if(currentBulletDir == 'right' && bPosX < this.contWidth ){
                bullet.setPosX( bPosX + 3 );
            }else if( currentBulletDir === "right" && bPosX >= this.contWidth){
                this.bullets.splice(b, 1);
            }
            if(currentBulletDir == 'left' && bPosX > 0){
                bullet.setPosX( bPosX - 3 );   
            }else if( currentBulletDir === "left" && bPosX <= 0){
                this.bullets.splice(b, 1);
            }
        });

        this.animate = requestAnimationFrame( () => this._turnOnEngine() ); // recursive iteration function
    }
    
    stopCanvasGame(){
        cancelAnimationFrame(this.animate); // cancel the animation loop engine
        clearInterval(this.zombieloop); // clear the time intervar zombie creator
    }
}