let todos = [];

function addToDo() {
    const val = document.querySelector("input").value;
    if (val === "") {
        alert("Please enter a value");
        return;
    } else {
        todos.push({ title: val });
        render();
        document.querySelector("input").value = "";
    }
}

function deleteTodoAt(idx) {
    todos.splice(idx, 1);
    render();
}

function editTodoAt(idx) {
    const todoItem = document.querySelector(`#todo-${idx}`);
    const todoText = document.querySelector(`#todo-${idx} h3`);

    // Replace the text with an input field
    const input = document.createElement("input");
    input.type = "text";
    input.value = todos[idx].title;
    input.className = "edit-input";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "save-btn";
    saveButton.onclick = () => saveEdit(idx, input.value);

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className = "cancel-btn";
    cancelButton.onclick = () => render();

    const editActions = document.createElement("div");
    editActions.className = "edit-actions";
    editActions.append(saveButton, cancelButton);

    // Clear current content and append the new layout
    todoItem.innerHTML = "";
    todoItem.append(input, editActions);
}

function saveEdit(idx, newValue) {
    if (newValue.trim() === "") {
        alert("To-do cannot be empty.");
        return;
    }
    todos[idx].title = newValue;
    render();
}

function createTodoComponent(todo, idx) {
    const div = document.createElement("div");
    div.classList.add("todo-item");
    div.id = `todo-${idx}`;

    const h3 = document.createElement("h3");
    h3.textContent = todo.title;
    h3.className = "todo-text";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = () => editTodoAt(idx);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = () => deleteTodoAt(idx);

    buttonContainer.append(editButton, deleteButton);
    div.append(h3, buttonContainer);

    return div;
}

function render() {
    const todoBox = document.querySelector("#todoBox");
    if (todos.length > 0) {
        todoBox.style.display = "block"; // Show the todo box
        todoBox.innerHTML = ""; // Clear the box before re-rendering
        todos.forEach((todo, idx) => {
            todoBox.appendChild(createTodoComponent(todo, idx));
        });
    } else {
        todoBox.style.display = "none"; // Hide the todo box
    }
}
