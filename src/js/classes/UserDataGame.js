export default class UserData {
    constructor() {
        this.nickName = "";
        this.player = "";
        this.score = 0;
        this.statusGame = false;
    }

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
}