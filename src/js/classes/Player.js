export default class Player{
    constructor( imgs_right, imgs_left, w_pointsoflife = 0, context, w_id){
        this.x = 0;
        this.y = 0;
        this.pointsOfLive = w_pointsoflife;
        this.id = w_id;
        this.c = context;
        this.assets_right = imgs_right;
        this.assets_left = imgs_left;
        this.run;
        this.imageIndex = 0;
        this.direction = 'right';
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

    startRun(){
        if(this.imageIndex < 14){
            this.imageIndex += 1;
        }else{
            this.imageIndex = 1;
        }
    }

    stopRun(){
        clearInterval(this.run);
        this.imageIndex = 0;
    }

    draw(x, y){
        this.c.drawImage(((this.direction == 'right')?this.assets_right[this.imageIndex]:this.assets_left[this.imageIndex]), this.x, this.y, 170, 160);
    }
}