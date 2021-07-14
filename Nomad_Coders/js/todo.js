const toDoForm = document.getElementById("todo-form");
// above is the same wiht document.queryselector("#todo-form input")
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEYS = "todos";

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
  } 

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const liElement = document.createElement("li");
    liElement.id = newTodo.id;
    const spanElement = document.createElement("span");
    spanElement.innerText=newTodo.text;
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "❌";
    buttonElement.addEventListener("click", deleteToDo);

    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);
    toDoList.appendChild(liElement);
}



function handleToDoSubmit(event) {
    event.preventDefault();   
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");



if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
