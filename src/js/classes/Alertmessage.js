export default class AlertMessage{
    constructor(){
        this.message = '';
    }

    setMessage(message){
        this.message = message;
        this.createAlert();
    }

    createAlert(){
        let msCnt = document.getElementById('AlertsContainer');
        let message = `<div class="message__alert"><p>${this.message}</p></div>`
        msCnt.innerHTML = message;
        this.removeAlert();
    }

    removeAlert(){
        let alertEl = document.querySelector(".message__alert"); 
        var timer = setTimeout(()=>{
            alertEl.remove(0)
            clearTimeout(timer);
        }, 3000);
    }
}