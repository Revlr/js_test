const title = document.getElementById("title");
title.innerHTML =  "Changed!";
title.style.color = 'red';

console.dir(document);
document.title = "pwned";

const test = document.querySelector("#test");
test.style.color = "gray";
//# is find by id
//. is find by class

const testClass = document.querySelector(".testclass");
testClass.style.color = "black";