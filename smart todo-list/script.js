let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

let text=document.createElement("span");
text.innerHTML=task.text + " ("+task.date+")";

if(task.completed){
text.classList.add("completed");
}

text.onclick=function(){
task.completed=!task.completed;
saveTasks();
displayTasks();
};

let del=document.createElement("button");
del.textContent="Delete";

del.onclick=function(){
tasks.splice(index,1);
saveTasks();
displayTasks();
};

li.appendChild(text);
li.appendChild(del);

list.appendChild(li);

});
}

function addTask(){

let text=document.getElementById("taskInput").value;
let date=document.getElementById("dueDate").value;

if(text==="") return;

tasks.push({text:text,date:date,completed:false});

document.getElementById("taskInput").value="";
document.getElementById("dueDate").value="";

saveTasks();
displayTasks();
}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

displayTasks();