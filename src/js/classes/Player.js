export default class Player{
    constructor( 
        imgs_right, // get the array images preloaded for the right direction
        imgs_left,  // get the array images preloaded for the left direction
        w_pointsoflife = 0, // set the points of life
        context, // pass the context to draw the new object to the canvas env
        w_id, // set the id (not in use by the moment)
        w_dir = "right" // set the origin direction
        ){
        this.x = 0; // origin x pos
        this.y = 0; // origin y pos
        this.pointsOfLive = w_pointsoflife;
        this.id = w_id;
        this.c = context;
        this.assets_right = imgs_right;
        this.assets_left = imgs_left;
        this.imageIndex = 0;
        this.direction = w_dir;
        this.maxImgs = (this.direction)? (this.assets_right.length-1):(this.assets_left.length-1); // create a limit to loop
    }
 

    /** Getters && Setters */
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
        if(this.imageIndex < this.maxImgs){ // displaying the movement images
            this.imageIndex += 1;
        }else{
            this.imageIndex = 1; // return to the first image
        }
    }

    stopRun(){
        this.imageIndex = 0; // return to the first image
    }

    draw(x, y){
        this.c.drawImage(((this.direction == 'right')? this.assets_right[this.imageIndex]:this.assets_left[this.imageIndex]), this.x, this.y, 100, 160);
    }
}