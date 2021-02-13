const title = document.querySelector("#title");

const BASE_COLOR = "rgb(219, 219, 219)"; // *warning* space 
const OTHER_COLOR = "#91cfe6";

function handleClick(event) {
    const currentColor = title.style.color;
    //console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.addEventListener("mouseenter", handleClick);
}

init();