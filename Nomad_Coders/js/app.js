

// access, bring HTML element using JS

const title = document.getElementById("title"); 

console.dir(title);
title.innerText = "Got it";

console.log(title.id);
console.log(title.className);
// document makes us interact with HTML, CSS  thru JS

// HOW WE can 

const hellos = document.getElementsByClassName("helloclass");
console.log(hellos);

const title2 = document.getElementsByTagName("h1");

console.log(document.querySelector("h1"));

const title3 = document.querySelector("div.hello:first-child h1");
// document.querySelector("div.hello:first-child h1");

// console.dir : 내부를 들여다보면 된다.
// on으로 시작하는 propertye들은 event 이다.                                       

function handleTitleClick(){
    console.log("CLICKED");
    title3.style.color="blue";
}

// if you want to execute a fuction immediately, use func() not func.. 
title3.addEventListener("click",handleTitleClick);


// 2way to use Events
// 1) title.onclick = handleTitleClick;
// 2) title.addEventListener("click", handleTitleClick);
// 2) -> we can usee removeEventListener later! 

//devicemovie, resize 
// window.addEventListener("resize", handleWindowResize);


function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
};
window.addEventListener("resize", handleWindowResize); // document처럼 원래 있는 항목! 

function handleWindowCopy(){
    alert("COPIER!");
}
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",);
