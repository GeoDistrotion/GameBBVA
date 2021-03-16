export default class UserData {
    constructor() {
        this.nickName = "";
        this.player = "";
        this.score = 0;
        this.level = 0;
    }

    /** Getters & Setters */

    setNickName(usr_name) {
        this.nickName = usr_name;
    }
    getNickName() {
        return this.nickName;
    }

    setPlayer(usr_player) {
        this.player = usr_player;
    }
    getPlayer() {
        return this.player;
    }

    setScore(score){
        this.score = score;
    }
    getScore(score){
        return this.score;
    }
    
    setLevel(level){
        this.level = level;
    }
    getLevel(){
        return this.level;
    }
}