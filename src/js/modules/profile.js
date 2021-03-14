/**
 * 
 * @param {*} w_userdata 
 */
export function initProfileEvents(w_userdata){      // Bind events to the interactive elements
    const btns_player       = document.getElementsByClassName('btn-player');    // get all the player buttons selector
    const nickname_input    = document.querySelector('#NicknameInput');         // get the nickname text input 

    nickname_input.addEventListener('input', e => {     // Add the onchange event to the input
        const input_value = e.target.value;
        const current_value = input_value.replace(/[^a-zA-Z0-9]/g, '') // Validatin to only accept text
        w_userdata.setNickName(current_value); // set the new nickname
    });

    for (let btnplyr = 0; btnplyr < btns_player.length; btnplyr++) { // looping through the buttons
        const current_btn   = btns_player[btnplyr]; //
        const w_player      = current_btn.getAttribute('attr-player'); // catch the player attribute and set it in a const
        current_btn.addEventListener( 'click', () =>{  // add click event to each button
            w_userdata.setPlayer(w_player);     // set the new selected player in the main user data
            choosePlayer(current_btn);  // restore the other options state
        })
    }
}

export function removeProfileEvents(){
    const btns_player       = document.getElementsByClassName('btn-player');    // get all the player buttons selector
    const nickname_input    = document.querySelector('#NicknameInput');         // get the nickname text input 
    nickname_input.value = "";
    nickname_input.addEventListener('input', e => {})
    for (let btnplyr = 0; btnplyr < btns_player.length; btnplyr++) {
        const current_btn = btns_player[btnplyr];
        current_btn.removeEventListener('click', ()=>{});
    }
}

/**
 * 
 * @param {*} btn 
 */
function choosePlayer(btn=null){
    const btns_player = document.getElementsByClassName('btn-player');
    for (let btnplyr = 0; btnplyr < btns_player.length; btnplyr++) {
        const current_btn = btns_player[btnplyr];
        current_btn.classList.remove("selected");
    }
    if( btn )
        btn.classList.add("selected");
}


export function  clearProfile(w_userdata){
    w_userdata.setNickName('');
    w_userdata.setPlayer('');
}