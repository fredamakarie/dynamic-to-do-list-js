document.addEventListener ("DOMContentLoaded",function(){
    const addButton = document.getElementById("add-task");
   const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
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
               btn.className = 'remove-btn';

                btn.addEventListener('click', function() {
            taskList.remove(li);})

            li.appendChild(btn);
          taskList.appendChild(li);


           taskInput.value = ""; 
            }
       taskInput.addEventListener('click', function() {})

       taskInput.addEventListener('keypress', function() {
          if (event.key === "Enter") {
            addTask();
  }
});

    }

addTask();

})