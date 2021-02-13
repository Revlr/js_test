const title = document.querySelector("#title");

/*
function handleResize(event){
    console.log(event);
}

window.addEventListener(resize, handleResize);
*/

function handleClick() {
    title.style.color = "skyblue";
    console.log("title is clicked");
}

title.addEventListener("mouseover", handleClick);