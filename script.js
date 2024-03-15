const inpuBox = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inpuBox.value == ""){
        alert("You Write Something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inpuBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inpuBox.value = "";
    saveData()
}

listContainer.addEventListener('click', function (event) {
    if(event.target.tagName === "LI" ){
        event.target.classList.toggle("checked")
        saveData()
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();