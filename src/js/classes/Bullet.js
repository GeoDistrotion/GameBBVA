export default class Bullet{
    constructor( x, y, dir = 'right', context){
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.direction = dir
        this.c  = context;
    }

    /** Getters && Setters */
    setPosX(x){
        this.x = x;
    } 

    getPosX(x){
        return this.x;
    }

    getDirection(){
        return this.direction;
    }

    draw(){
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.c.fillStyle = 'red';
        this.c.fill();
    }
}