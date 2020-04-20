const btnAddTask = document.getElementById('addTask');
const btnSortByTask = document.getElementById('sortByTask');

const formatDate = (strDate) => {
  const elem = strDate.split(' ');
  return `${elem[0]} ${elem[1]} ${elem[2]}`;
}

const handleClickTask = (clickEvent) => {
  //add a check mark in front of text if class is not equals completed
  if (!(clickEvent.target.getAttribute("class") === "completed"))
    clickEvent.target.classList.toggle('completed');
}

const handleSubmitNewTask = () => {
  const dateDeadline = document.getElementById('deadline');
  const txtNewTask = document.getElementById('newTask');

  if (txtNewTask.value === "" || dateDeadline.value === "") {
    alert('Please input name of task or deadline');
  }
  else {
    const taskList = document.getElementById('listTasks');

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
}

const handleSortByTask = () => {


  const taskList = document.getElementById('listTasks');
  const cloneTaskList = taskList.cloneNode(false);

  const jsTasks = [...document.getElementsByClassName("tasks")];
  const jsSorted = jsTasks.sort((a, b) => {
    const taskA = a.innerText.toLowerCase();
    const taskB = b.innerText.toLowerCase();
    if (taskA < taskB) return -1;
    if (taskA > taskB) return 1;
    return 0;
  });

  jsSorted.forEach((task, index) => {
    cloneTaskList.appendChild(task);
  })

  taskList.parentNode.replaceChild(cloneTaskList, taskList);
}

btnAddTask.addEventListener('click', handleSubmitNewTask);
btnSortByTask.addEventListener('click', handleSortByTask);