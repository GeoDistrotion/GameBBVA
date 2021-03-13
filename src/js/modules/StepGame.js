import AlertMessage from '../modules/Alertmessage';

/**
 * 
 * @param {*} currentView 
 * @param {*} w_usrdata 
 * @param {*} callback 
 */
export function stepGameManager(currentView = 0, w_usrdata, callback){
    const sections = document.getElementsByClassName('step-cont'); // get Sections
    for (let sect = 0; sect < sections.length; sect++) {
        if( validateStep( w_usrdata, currentView ) ){ // Validate Section rules
            if(sect === currentView) // Compare with parameter
                sections[sect].style.display = "block"; // Show Section
            else
                sections[sect].style.display = "none"; // Hide Section
        }
    }
    callback(currentView);
}

/**
 * 
 * @param {*} w_usrdata 
 * @param {*} callback 
 */
export function btnChoseSection(w_usrdata, callback){
    let btnSection = document.getElementsByClassName('bnt__section'); // Get buttons
    for (let btn = 0; btn < btnSection.length; btn++) { // Loop each one
        const current__btn = btnSection[btn];
        let step = current__btn.getAttribute("attr-section"); 
        current__btn.addEventListener('click', () => {
            stepGameManager(parseInt(step), w_usrdata, callback);
        })
        
    }
}

/**
 * 
 * @param {*} w_usrdata 
 * @param {*} step 
 * @returns 
 */
function validateStep(w_usrdata, step){ // function to validate section
    let alert = new AlertMessage()
    let valid = false;
    switch (step) {
        case 0: // Section 0 not require validation
            valid = true; 
            break;
        case 1: // Section 1 not require validation
            valid = true;
            alert.setMessage('Comienza el juego!');
            break;
        case 2: // Section require validation 2 validations, the nickname and the
            const nickName = w_usrdata.getPlayer();
            const player = w_usrdata.getPlayer();
            if(nickName && player)
                valid = true;
            else
                valid = false;
                alert.setMessage('Debes seleccionar al menos un perfil e ingresar un nickname.');
            break;
        default:
            valid = false;
            break;
    }
    console.log(step, `Es valido: ${valid}`);
    return valid;
}