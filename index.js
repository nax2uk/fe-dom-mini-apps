const taskList = document.getElementById('listTasks');
const btnAddTask = document.getElementById('addTask');
const txtNewTask = document.getElementById('newTask');
const dateDeadline = document.getElementById('deadline');
const arrTasks = document.getElementsByClassName("tasks");

const jsTasks = [...arrTasks];

console.dir(dateDeadline);

const formatDate = (strDate) => {
  const elem = strDate.split(' ');
  return `${elem[0]} ${elem[1]} ${elem[2]}`
}

const handleClickTask = (clickEvent) => {
  //add a check mark in front of text if class is not equals completed
  if (!(clickEvent.target.getAttribute("class") === "completed"))
    clickEvent.target.classList.toggle('completed');
}

const handleSubmitNewTask = () => {
  const newTask = document.createElement('li');
  const deadline = document.createElement('time');

  newTask.setAttribute('class', 'tasks');
  newTask.innerText = txtNewTask.value;
  newTask.addEventListener('click', handleClickTask);

  deadline.setAttribute('datetime', dateDeadline.value);
  deadline.innerText = formatDate(dateDeadline.valueAsDate.toString());

  newTask.appendChild(deadline);
  taskList.appendChild(newTask);

  txtNewTask.value = "";
  dateDeadline.value = "";
}

btnAddTask.addEventListener('click', handleSubmitNewTask);

jsTasks.forEach(task => {
  task.addEventListener('click', handleClickTask);
});




