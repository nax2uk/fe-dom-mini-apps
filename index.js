const taskList = document.getElementById('listTasks');
const arrTasks = document.getElementsByClassName("tasks");
const btnAddTask = document.getElementById('addTask');
const txtNewTask = document.getElementById('newTask');
const jsTasks = [...arrTasks];


const handleClickTask = (clickEvent) => {
  //add a check mark in front of text if class is not equals completed
  if (!(clickEvent.target.getAttribute("class") === "completed"))
    clickEvent.target.classList.toggle('completed');
}

const handleSubmitNewTask = () => {
  const newTask = document.createElement('li');
  newTask.setAttribute('class', 'tasks');
  newTask.innerText = txtNewTask.value;
  newTask.addEventListener('click', handleClickTask);
  taskList.appendChild(newTask);
  txtNewTask.value = "";
}

btnAddTask.addEventListener('click', handleSubmitNewTask);

jsTasks.forEach(task => {
  task.addEventListener('click', handleClickTask);
});




