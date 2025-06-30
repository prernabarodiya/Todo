var ctr = 0;
function addToDo(){
    const inputEl = document.querySelector("#input1");
    const val = inputEl.value;
    if(val === "") {
        alert("Please enter a value");
        return;
    }else {
        const newDivEl = document.createElement("div");
        newDivEl.setAttribute("id", "todo-" + ctr);
        newDivEl.className = "todo-item";
        newDivEl.innerHTML = "<span>" + val + '</span><button class="delete-btn" onclick = "deleteToDo(' + ctr + ')">delete</button>';
        document.querySelector("#todoList").appendChild(newDivEl);
        inputEl.value = "";
        ctr = ctr + 1;
    }
    
}

function deleteToDo(idx){
    const element = document.getElementById("todo-" + idx);
    element.parentNode.removeChild(element);
}