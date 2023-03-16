{
    let tasks = [];
    let hideDoneTasks = false;

const removeTask = (taskIndex) => {
    tasks = [
...tasks.slice(0, taskIndex),
...tasks.slice(taskIndex + 1),
    ];
render();
};

const toggleTaskDone = (taskIndex) => {
    tasks = [
        ...tasks.slice(0, taskIndex),
        {
            ...tasks[taskIndex],
            done: !tasks[taskIndex].done,
        },
        ...tasks.slice(taskIndex + 1),
    ];
    render();
};

const addNewTask = (newTaskContent) => {
    tasks = [...tasks, {content: newTaskContent}];
    render();
};

const markAllTaskDone = () => {
    tasks = tasks.map((task) => ({
        ...task,
        done: true,
    }));
    render();
};

const toggleHideDoneTask = () => {
hideDoneTasks = !hideDoneTasks;
render();
};  

const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, taskIndex) => {
    removeButton.addEventListener("click", () => {
        removeTask(taskIndex);
    });
});

const bindToggleDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");
    toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
    toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(taskIndex);
    });
});
};

const renderTasks = () => {
    const taskToHTML = task =>
    <li class="
    tasks_item${task.done && hideDoneTasks ? " tasks_item--hidden" : ""} js-remove">
    <button class="tasks_button tasks_button--toggleDone js-toggleDone"
        ${task.done ? "✓" : ""}
        </button>
        <span class="tasks_content${task.done ? "tasks_content--done" : ""}">
        ${task.content}
        </span>
        <button class="tasks_button tasks_button--remove js-remove">
            🗑️
        </button>
        </li>
        ;

        const taskElement = document.querySelector(".js-tasks");
        tasksElement.innerHTML = tasks.map(taskToHTML).join("");  
};

const renderButtons = () => {
    const buttonsElement = document.querySelector(".js-buttons");

    if (!tasks.lenght) {
        buttonsElement.innerHTML = "";
        return;
    }
    buttonsElement.innerHTML = 
    <><button class="buttons_button js-toggleHideDoneTasks">
            ${hideDoneTasks ? "Pokaż" : "Ukryj"} Ukończone
        </button><button class="buttons_button js-markAllDone"
            $ {...tasks.every(({ done }) => done) ? "disabled" : ""}>
                Ukończ wszystkie
            </button></>
    ;
};

const bindButtonsEvents = () => {
    const markAllDoneButton = document.querySelector(".js-markAllDone");
    if (markAllDoneButton) {
        markAllDoneButton.addEventListener("click", markAllTaskDone);
    }
const toggleHideDoneTasksButton = document.querySelector(".js-toggleHideDoneTasksButton");
if (toggleHideDoneTasksButton) {
    toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
}
};

const render = () => {
    renderTasks();
    bindRemoveEvents();
    bindToggleDoneEvents();

    renderButtons();
    bindButtonsEvents();
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.ariaValueMax.trim();
    if (newTaskContent !=="") {
        addNewTask(newTaskContent);
        newTaskElement.value = "";
    }
    newTaskElement.focus();
};

const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
};

init();



