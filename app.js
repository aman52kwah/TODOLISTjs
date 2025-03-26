// variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


// event listener for add button
addTask.addEventListener('click', 
function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    //validate task to if notthingis typed
    if (inputTask.value === "") {
        alert('Pleasae Enter a Task')
    } else{
        taskContainer.appendChild(task);
    }


    inputTask.value= "";


    // use event listener to to complete task
    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration = 
        "line-through";
    });


    // use event listener to delete task with event propagation
    deleteButton.addEventListener('click', function(e){


        let target =e.target;

        //tarverse the element twice
        target.parentElement.parentElement.remove();

    });

});