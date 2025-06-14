document.addEventListener ("DOMContentLoaded",function(){
    const addButton = document.getElementById("add-task-btn");
   const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});

//Adding a task
    function addTask(){
         const taskText = taskInput.value.trim();
        
         if (taskText=== ""){
            alert ("Enter a task");
        } else {
                const li = document.createElement("li");
                li.textContent = taskText;

                const btn = document.createElement("button");
                btn.textContent = "Remove";
               btn.classList.add = "remove-btn"

                btn.addEventListener('click', function() {
            taskList.removeChild(li);})

            li.appendChild(btn);
          taskList.appendChild(li);


           taskInput.value = ""; 
            }
       taskInput.addEventListener('click', function(){})

       addButton.addEventListener(addTask, function(){})

       taskInput.addEventListener('keypress', function() {
          if (event.key === "Enter") {
            addTask();
  }
});

    }

addTask();

})