const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//     const currentClass = title.className;
//     if(currentClass !== CLICKED_CLASS){
//         title.className = CLICKED_CLASS;
//     } else{
//         title.className = "";
//     }
// }
//
//is same this

// function handleClick() {
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(!hasClass){
//         title.classList.add(CLICKED_CLASS);
//     } else{
//         title.classList.remove(CLICKED_CLASS);
//     }
// }
//
//is same this

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}
//i think, this is the best.

function init() {
    title.addEventListener("click", handleClick);
}
init();