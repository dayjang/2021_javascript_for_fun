const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

// 1. Using padStart
function getClock2() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds= String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

//2. 


getClock2(); // first call the function to make default html shows the current time and then,,do setInterval! 
  
setInterval(getClock2,1000);

// be careful...setInterval(getClock(),1000) not to use () 






// 1... 
// function sayHello() {
//     console.log("hello");
// }

//  setInterval(sayHello, 5000); // 5000ms = 5sec
//  setTimeout(sayHello, 5000); 위에거랑 차이가 뭐지? 
// setInterval = you want something should happen every 5 second.. 
// clock.innerText="hahaha";

// 2.. in JS console! 
// new Date()
// Fri Jun 04 2021 14:15:02 GMT-0400 (Eastern Daylight Time)
// const date = new Date(); // 왜 new를 붙일까? 
// undefined
// date.getDate;
// 
// date.getDate() ; 
// 4
// date.getFullYear() ; 
// 2021
// new Date().getSeconds(); // or we can do this 


//3... 
// function getClock() {
//     const date = new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }

// setInterval(getClock(),1000); // be careful...? 
// setInterval(getClock,1000); 