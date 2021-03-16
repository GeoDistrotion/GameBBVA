import './index.scss';
import MainLogo from './images/logo_bbva_blanco.svg';
import MainBackGround from './images/zombie-background-02.jpg';
import PlayConsultant from './images/Player_Consultant.jpg';
import Playmanager from './images/Player_Manager.jpg';
import PlayTech from './images/Player_TechCreative.jpg';
import getGameAssets from './js/modules/hero_images';
import {stepGameManager, btnChoseSection} from './js/modules/stepGame';
import UserData from './js/classes/UserDataGame';
import { initProfileEvents, removeProfileEvents, clearProfile } from './js/modules/profile';
import CanvasGame from './js/classes/CanvasGame'


function initGame(){
    let userData = new UserData();
    const gameAssets = getGameAssets();
    const canvasGame = new CanvasGame( gameAssets, triggerSection );
    btnChoseSection(userData, triggerSection); // add Chose section Event to buttons
    stepGameManager(0, userData, triggerSection); // init the game with the first view

    function triggerSection(w_sect){
        removeProfileEvents();
        switch (w_sect) {
            case 1:
                clearProfile( userData ); // clear the current profile to add a new one
                initProfileEvents( userData ); // init the profile bottons event to select the new one
                break;
            case 2:
                canvasGame.startCanvasGame(userData); // start the canvas game
                break;
            case 3:
                const resultNickname = document.querySelector('.result-nickname');
                const resultLevel = document.querySelector('.result-level');
                const resultScore = document.querySelector('.result-score');
                resultNickname.innerHTML = this.userData.getNickName();
                resultLevel.innerHTML = this.userData.getLevel();
                resultScore.innerHTML = this.userData.getScore();
                stepGameManager(3, userData, null); // End section and show the history list
                break;
        }
    }
}

(function(){
    initGame();
})();