
function addTask() {

    const tasktitle = document.querySelector("task-title").value;

    if(tasktitle) {
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);
    newTask.querySelector(".task-title").textContent - tasktitle;

    newTask.classList.remove("template")
    newTask.classList.remove("hide");

    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {

    removeTask(this);

        }
);
    }
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

e.preventDefault();

addTask();

});
