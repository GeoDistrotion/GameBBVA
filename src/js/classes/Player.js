export default class Player{
    constructor( 
        imgs_right, 
        imgs_left,  
        w_pointsoflife = 0, 
        context, 
        w_id,
        w_dir = "right"
        ){
        this.x = 0;
        this.y = 0;
        this.pointsOfLive = w_pointsoflife;
        this.id = w_id;
        this.c = context;
        this.assets_right = imgs_right;
        this.assets_left = imgs_left;
        this.imageIndex = 0;
        this.direction = w_dir;
        this.maxImgs = (this.direction)? (this.assets_right.length-1):(this.assets_left.length-1)
    }

    setPosX(x){
        this.x = x;
    }
    setPosY(y){
        this.y = y;
    }

    getPosX(x){
        return this.x;
    }
    getPosY(y){
        return this.y;
    }

    setDirection(direction){
        this.direction = direction;
    }
    getDirection(){
        return this.direction;
    }

    startRun(){
        if(this.imageIndex < this.maxImgs){
            this.imageIndex += 1;
        }else{
            this.imageIndex = 1;
        }
    }

    stopRun(){
        this.imageIndex = 0;
    }

    draw(x, y){
        this.c.drawImage(((this.direction == 'right')? this.assets_right[this.imageIndex]:this.assets_left[this.imageIndex]), this.x, this.y, 100, 160);
    }
}