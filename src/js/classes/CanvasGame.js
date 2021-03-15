import Player from './Player';

export default class CanvasGame{
    constructor(){
        this.gameCont = document.querySelector('#InitBBVAGame');
        this.canvas = document.createElement('canvas');
        this.context;
        this.contWidth = 0;
        this.contHeight = 0;
    }

    startCanvasGame(){
        this.context = this.canvas.getContext('2d');
        this.contWidth = this.gameCont.offsetWidth;
        this.contHeight = this.gameCont.offsetHeight;
        this.canvas.width = this.contWidth;
        this.canvas.height = this.contHeight;
        this.gameCont.appendChild(this.canvas);

        this.hero = new Player(0, 0, 50, 'Hero');
        this.hero.draw();
    }


    
    stopCanvasGame(){}
}