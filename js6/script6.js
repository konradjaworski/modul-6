{

    const tasks = [
     
    ];


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=`
            <li class="tasks_item" ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            <button class="js-done">zrobione?</button>
            ${task.content}
            <button class="js-remove">usuń</button>
            </li>
          
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    
    
        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach ((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach ((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDoneTask(index);
            });
        });

    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            


        });

        render();
    };
        const removeTask = (index) =>    { 
            tasks.splice(index, 1);
        render();

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        
    }

    const toggleDoneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();

    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();

}