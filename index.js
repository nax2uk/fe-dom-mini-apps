

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
  const optPriority = document.getElementById('newPriority');

  if (txtNewTask.value === "" || dateDeadline.value === "" || optPriority.value === "") {
    alert('Please input name of task or deadline');
  }
  else {
    const taskList = document.getElementById('listTasks');

    const newTask = document.createElement('li');
    const deadline = document.createElement('time');
    const priority = document.createElement('span');

    priority.setAttribute('class', 'priority');
    priority.innerText = " Priority: " + optPriority.value;
    priority.value = optPriority.value;
    priority.addEventListener('click', handleClickTask);

    newTask.setAttribute('class', 'tasks');
    newTask.innerText = txtNewTask.value;
    newTask.addEventListener('click', handleClickTask);

    deadline.setAttribute('datetime', dateDeadline.value);
    deadline.innerText = "Due: " + formatDate(dateDeadline.valueAsDate.toString());
    deadline.addEventListener('click', handleClickTask);

    newTask.appendChild(deadline);
    newTask.appendChild(priority);
    taskList.appendChild(newTask);

    txtNewTask.value = "";
    dateDeadline.value = ""
    optPriority.value = "";
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

  jsSorted.forEach((task) => {
    cloneTaskList.appendChild(task);
  })

  taskList.parentNode.replaceChild(cloneTaskList, taskList);
}

const handleSortByPriority = () => {

  const taskList = document.getElementById('listTasks');
  const cloneTaskList = taskList.cloneNode(false);
  const jsPriority = [...document.getElementsByClassName('priority')];
  const jsSorted = jsPriority.sort((a, b) => {
    console.dir(a);
    const taskA = a.value;
    const taskB = b.value;
    if (taskA > taskB) return 1;
    if (taskA < taskB) return -1;
    return 0;
  })

  jsSorted.forEach(priority => {
    cloneTaskList.appendChild(priority.parentNode);
  })
  taskList.parentNode.replaceChild(cloneTaskList, taskList);

}

const handleSortByDate = () => {

  const taskList = document.getElementById('listTasks');
  const cloneTaskList = taskList.cloneNode(false);
  const jsTime = [...document.getElementsByTagName('time')];

  const jsSorted = jsTime.sort((a, b) => {
    const taskA = new Date(a.dateTime);
    const taskB = new Date(b.dateTime);
    return taskA - taskB;
  })

  jsSorted.forEach(date => {
    cloneTaskList.appendChild(date.parentNode);
  })
  taskList.parentNode.replaceChild(cloneTaskList, taskList);


}

// Display today's date in header
today = new Date();
let options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}
let day = today.toLocaleDateString('en-us', options);
const headerDate = document.querySelector('h1');
headerDate.innerText = day;

const btnAddTask = document.getElementById('addTask');
const btnSortByTask = document.getElementById('sortByTask');
const btnSortByPriority = document.getElementById('sortByPriority');
const btnSortByDate = document.getElementById('sortByDate');

btnAddTask.addEventListener('click', handleSubmitNewTask);
btnSortByTask.addEventListener('click', handleSortByTask);
btnSortByPriority.addEventListener('click', handleSortByPriority);
btnSortByDate.addEventListener('click', handleSortByDate);