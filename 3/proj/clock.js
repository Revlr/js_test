const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");;

function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    clockTitle.innerText = `${hour}:`+`0${min}`.slice(-2);
}

function init(){
    getTime();
}
init();