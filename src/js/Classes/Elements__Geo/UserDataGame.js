export default class UserData {
    constructor() {
        this.nickName = "";
        this.player = "";
        this.statusGame = false;
    }

    setUserName(usr_name) {
        this.nickName = usr_name;
    }
    getUserName() {
        return this.nickName;
    }

    setPlayer(usr_player) {
        this.player = usr_player;
    }
    getPlayer() {
        return this.player;
    }
}