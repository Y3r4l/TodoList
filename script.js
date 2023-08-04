function agregarTarea() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = taskText + '<div class="task-buttons"><button onclick="completarTarea(this)">Completar</button><button onclick="eliminarTarea(this)">Eliminar</button></div>';
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

function completarTarea(button) {
    var task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function eliminarTarea(button) {
    var task = button.parentElement.parentElement;
    task.remove();
}
