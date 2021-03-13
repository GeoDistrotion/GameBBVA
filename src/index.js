import './index.scss';
import MainLogo from './images/logo_bbva_blanco.svg';
import MainBackGround from './images/zombie-background-02.jpg';
import PlayConsultant from './images/Player_Consultant.jpg';
import Playmanager from './images/Player_Manager.jpg';
import PlayTech from './images/Player_TechCreative.jpg';
import {stepGameManager, btnChoseSection} from './js/modules/StepGame';
import UserData from './js/Classes/Elements__Geo/UserDataGame';


function initGame(){
    let userData = new UserData();
    btnChoseSection(userData, triggerSection); // add Chose section Event to buttons
    stepGameManager(0, userData, triggerSection); // init the game with the first view

    function triggerSection(w_sect){
        switch (w_sect) {
            case 2:
                
                break;
            case 3:
                
                break;
        }
    }
}

initGame();