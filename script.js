const addBtn = document.querySelector(".button")
const input = document.querySelector(".input")
const list = document.querySelector(".list")
dels = document.querySelectorAll(".delete")
edits = document.querySelectorAll(".edit")

// checkboxes = document.querySelectorAll(".checkbox")
// tasks = document.querySelectorAll("li") 



const taskList = []

const doneTask = function() {
    tasks = document.querySelectorAll("li")
    console.log(1)
    tasks.forEach(e => {
        task = {id: e.childNodes[1].childNodes[1].id, label: e.childNodes[1].childNodes[3].innerText, check: e.childNodes[1].childNodes[1].checked}
          
        localStorage.setItem(task.id, JSON.stringify(task))

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
        //console.log(e)
        
    })
}

const addTask = function() {
    inputValue = input.value
    if (inputValue !== "") {
        taskList.push(inputValue)
        itemList = []
        for (i = 0; i < localStorage.length; i++) {
            itemList.push(localStorage.key(i))
        }
        itemList = itemList.sort()
        console.log(itemList)
        idList = itemList.map((e) => Number(e.split("-")[1]))
        console.log(idList)
        // id = 1
        // for (i = 0; i < idList.length; i++) {
        //     if (idList[i] > id) {
        //         break
        //     }
        //     else {
        //         id++
        //     }
        // }
        if (idList.length != 0) {
            maxId = Math.max(...idList)
        }
        else {
            maxId = 0
        }
        id = maxId + 1
        list.innerHTML += `
            <li class="task" id="task-${id}">
                <div class="task-left">
                    <input type="checkbox" id="task-${id}" class="checkbox">
                    <label for="task-${id}" id="task-${id}" class="label">${inputValue}</label>
                </div>
                <div class="task-right">
                    <img src="icons/edit.png" class="edit" id="task-${id}"> 
                    <img src="icons/delete.png" class="delete" id="task-${id}">
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
        task = {id: e.childNodes[1].childNodes[1].id, label: e.childNodes[1].childNodes[3].innerText, check: e.childNodes[1].childNodes[1].checked}
        localStorage.setItem(task.id, JSON.stringify(task))
    })
    dels = document.querySelectorAll(".delete")
    dels.forEach(e => {
        e.addEventListener("click", e => {
            for (i = 0; i < localStorage.length; i++) {
                item = JSON.parse(localStorage.getItem(localStorage.key(i)))
                if (e.target.id == item.id) {
                    del_task = document.querySelector(`#${item.id}`)
                    del_task.remove()
                    localStorage.removeItem(item.id) 
                } 
            }
        })
    })
}






//tasks = document.querySelectorAll("li")
// tasks.forEach(e => {
//     console.log(e)
//     task = {id: e.childNodes[1].childNodes[1].id, label: e.childNodes[1].childNodes[3].innerText, check: e.childNodes[1].childNodes[1].checked}
//     console.log(task)
//     localStorage.setItem(task.id, JSON.stringify(task))
// })

/*list.innerHTML += `
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
        `*/  
// keyList = []
// for (i = 0; i < localStorage.length; i++) {
//     keyList.push(localStorage.key(i))
// }
// keyList.sort()
keys = Object.keys(localStorage) 
console.log(keys)
keyList = []
keys.forEach((key) => {
    value = localStorage.getItem(key)
    keyList.push(key)
    console.log(value)
})
keyList = keyList.sort()
console.log(keyList)
for (i = 0; i < localStorage.length; i++) {
    item = JSON.parse(localStorage.getItem(keyList[i]))
    console.log(keyList[i])
    if (item.check) {
        checked = "checked"
    }
    else {
        checked = ""
    }
    list.innerHTML += `
        <li class="task" id="${item.id}">
            <div class="task-left">
                <input type="checkbox" id="${item.id}" class="checkbox" ${checked}>
                <label for="${item.id}" id="${item.id}" class="label">${item.label}</label>
            </div>
            <div class="task-right">
                <img src="icons/edit.png" class="edit" id="${item.id}">
                <img src="icons/delete.png" class="delete" id="${item.id}">
            </div>
        </li>
    `
}

checkboxes = document.querySelectorAll(".checkbox")
tasks = document.querySelectorAll("li")

tasks.forEach(e => {
    //console.log(e)
    task = {id: e.childNodes[1].childNodes[1].id, label: e.childNodes[1].childNodes[3].innerText, check: e.childNodes[1].childNodes[1].checked}
    //console.log(task)
    localStorage.setItem(task.id, JSON.stringify(task))
    if (e.childNodes[1].childNodes[1].checked) {
        e.childNodes[1].childNodes[3].style.textDecoration = "line-through"
    }
    else {
        e.childNodes[1].childNodes[3].style.textDecoration = "none"
    }
})

dels = document.querySelectorAll(".delete")
dels.forEach(e => {
    e.addEventListener("click", e => {
        for (i = 0; i < localStorage.length; i++) {
            item = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if (e.target.id == item.id) {
                del_task = document.querySelector(`#${item.id}`)
                del_task.remove()
                console.log(del_task)
                localStorage.removeItem(item.id)
                
            } 
        }
    })
})

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

//localStorage.clear()

// const deleteTask = function() {
//     for (i = 0; i < localStorage.length; i++) {
//         item = JSON.parse(localStorage.getItem(localStorage.key(i)))
//         if 
//     }
// }

addBtn.addEventListener("click", addTask)
checkboxes.forEach(e => {
    e.addEventListener("change", doneTask)
});
dels = document.querySelectorAll(".delete")
dels.forEach(e => {
    e.addEventListener("click", e => {
        for (i = 0; i < localStorage.length; i++) {
            item = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if (e.target.id == item.id) {
                localStorage.removeItem(item.id)
            }
        }
    })
})
edits = document.querySelectorAll(".edit")
edits.forEach(e => {
    e.addEventListener("click", e => {
        id = e.target.id 
        item = document.querySelector(`#${id}`) 
        itemText = item.childNodes[1].childNodes[3].innerText
        item.childNodes[1].childNodes[3].style.display = "none"
        item.childNodes[1].innerHTML += `<input type="text" class="edit-input" value="${itemText}"> <button class="edit-button">&#10004;</button>`
        btn = item.querySelector(".edit-button")
        btn.addEventListener("click", b => {
            inputText = item.childNodes[1].childNodes[5].value
            item.childNodes[1].childNodes[7].remove()
            item.childNodes[1].childNodes[5].remove()
            item.childNodes[1].childNodes[3].innerText = inputText
            item.childNodes[1].childNodes[3].style.display = "block"
            task = JSON.parse(localStorage.getItem(id))
            task.label = inputText
            localStorage.setItem(id, JSON.stringify(task))
            console.log()
        })
        console.log(btn)
    })
})


const complete = document.querySelector(".complete")
const erase = document.querySelector(".erase")
complete.addEventListener("click", () => {
    checkboxes = document.querySelectorAll(".checkbox")
    k = 0
    i = 0
    checkboxes.forEach(e => {
        if (e.checked) {
            k++
        }
    })
    if (k != checkboxes.length) {
        checkboxes.forEach(e => {
            if (!e.checked) {
                e.checked = true
                item = JSON.parse(localStorage.getItem(localStorage.key(i)))
                item.check = true
                localStorage.setItem(localStorage.key(i), JSON.stringify(item))
            }
            console.log(item)
            i++
        })
    }
    else {
        checkboxes.forEach(e => {
            if (e.checked) {
                e.checked = false
                item = JSON.parse(localStorage.getItem(localStorage.key(i)))
                item.check = false
                localStorage.setItem(localStorage.key(i), JSON.stringify(item))
            }
            console.log(item)
            i++
        })
    }

    tasks = document.querySelectorAll("li")
    tasks.forEach(e => {
        if (e.childNodes[1].childNodes[1].checked) {
            e.childNodes[1].childNodes[3].style.textDecoration = "line-through"
        }
        else {
            e.childNodes[1].childNodes[3].style.textDecoration = "none"
        }
    })
})

erase.addEventListener("click", () => {
    tasks = document.querySelectorAll("li")
    tasks.forEach(e => {
        if (e.childNodes[1].childNodes[1].checked) {
            id = e.id
            console.log(e)
            localStorage.removeItem(id)
            list.removeChild(e)
        }
    })
})