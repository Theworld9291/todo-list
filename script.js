const addBtn = document.querySelector(".button")
const input = document.querySelector(".input")
const list = document.querySelector(".list")
const label = document.querySelector(".label")
const edit = document.querySelector(".edit")
const del = document.querySelector(".delete")

checkboxes = document.querySelectorAll(".checkbox")
tasks = document.querySelectorAll("li")

const taskList = ["Задача 1"]

const doneTask = function() {
    tasks = document.querySelectorAll("li")
    tasks.forEach(e => {
        if (e.childNodes[1].childNodes[1].checked) {
            e.childNodes[1].childNodes[3].style.textDecoration = "line-through"
        }
        else {
            e.childNodes[1].childNodes[3].style.textDecoration = "none"
        }
        if  (e.childNodes[1].childNodes[3].style.textDecoration == "line-through") {
            e.childNodes[1].childNodes[1].checked = true
        }
        else {
            e.childNodes[1].childNodes[1].checked = false
        }
    })
}

const addTask = function() {
    inputValue = input.value
    if (inputValue !== "") {
        taskList.push(inputValue)
        list.innerHTML += `
            <li class="task">
                <div class="task-left">
                    <input type="checkbox" id="task-${taskList.length - 1}" class="checkbox">
                    <label for="task-${taskList.length - 1}" id="task-${taskList.length - 1}" class="label">${inputValue}</label>
                </div>
                <div class="task-right">
                    <img src="icons/edit.png" class="edit">
                    <img src="icons/delete.png" class="delete">
                </div>
            </li>
        `  
    }
    
    input.value = ""
    checkboxes = document.querySelectorAll(".checkbox")
    checkboxes.forEach(e => {
        e.addEventListener("change", doneTask) 
    });
    tasks = document.querySelectorAll("li")
    tasks.forEach(e => {
        if  (e.childNodes[1].childNodes[3].style.textDecoration == "line-through") {
            e.childNodes[1].childNodes[1].checked = true
        }
        else {
            e.childNodes[1].childNodes[1].checked = false
        }
    })
}

addBtn.addEventListener("click", addTask)
checkboxes.forEach(e => {
    e.addEventListener("change", doneTask)
});

//n = 15
//console.log(localStorage.getItem("number"))
//localStorage.setItem("number", n)
//console.log(localStorage.getItem("number"))
//localStorage.removeItem("number")
//console.log(localStorage.getItem("number"))
//localStorage.clear()
/*
l = ["hi","task"]
localStorage.setItem("list", JSON.stringify(l))
row = localStorage.getItem("list")
console.log(JSON.parse(row))

person = {
    name: "Mike",
    age: 27
}
localStorage.setItem("person", JSON.stringify(person))
console.log(JSON.parse(localStorage.getItem("person")))
*/

