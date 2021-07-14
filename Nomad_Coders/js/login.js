// const loginForm = document.getElementById('login-form');

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASS_NM = "hidden"; 
function onLoginSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASS_NM);
   const username = loginInput.value;

   greeting.innerText = "Hello! " + username; 
   // greeting.innerText = `Hello! ${Username}`;

   greeting.classList.remove(HIDDEN_CLASS_NM);
1}    


loginForm.addEventListener("submit",onLoginSubmit); 










// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//    const username = loginInput.value;
//    console.log(username.value);

//    console.log("cllllickkkked!") ;
// }

// loginButton.addEventListener("click",onLoginBtnClick);


// // CLICK LINK! 
// const link = document.querySelector("a")
// function handleLinkClick(event){
//    //alert block a default browser behavior. so no one is using this alert !@
//    event.preventDefault();
//    console.log(event) 
// }
// link.addEventListener("click",handleLinkClick)

// //////////// 