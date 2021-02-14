const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");;

function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerText = `0${hour}`.slice(-2)+":"+`0${min}`.slice(-2)+":"+`0${sec}`.slice(-2);
}

function init(){
    getTime();
    setInterval(getTime, 1000)
}
init();