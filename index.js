import store from "./store.js";

import { addTask, removeTask, toggleTask } from "./taskActions.js";

// Get HTML elements
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const addTaskBtn = document.getElementById("addTaskBtn");

const taskId = document.getElementById("taskId");
const removeTaskBtn = document.getElementById("removeTaskBtn");

const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");

// Generate unique task IDs
let nextTaskId = 1;

// Add Task
addTaskBtn.addEventListener("click", () => {
  const title = taskTitle.value.trim();
  const description = taskDescription.value.trim();

  if (!title || !description) {
    alert("Please enter both task title and description.");
    return;
  }

  const newTask = {
    id: nextTaskId++,
    title: title,
    description: description,
    completed: false,
  };

  store.dispatch(addTask(newTask));

  // Clear input fields
  taskTitle.value = "";
  taskDescription.value = "";
});

// Remove Task
removeTaskBtn.addEventListener("click", () => {
  const id = Number(taskId.value);

  if (!Number.isInteger(id) || id <= 0) {
    alert("Please enter a valid Task ID.");
    return;
  }

  const taskExists = store.getState().tasks.some((task) => task.id === id);

  if (!taskExists) {
    alert("Task not found!");
    return;
  }

  store.dispatch(removeTask(id));

  taskId.value = "";
});

// Render Tasks
function renderTasks() {
  const state = store.getState();

  taskList.innerHTML = "";

  // Display nothing when there are no tasks
  if (state.tasks.length === 0) {
    totalTasks.textContent = "Total Tasks: 0";
    return;
  }

  state.tasks.forEach((task) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      store.dispatch(toggleTask(task.id));
    });

    const span = document.createElement("span");

    span.textContent = `${task.id}. ${task.title}: ${task.description}`;

    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.textContent += " : Completed";
    }

    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);
  });

  totalTasks.textContent = `Total Tasks: ${state.tasks.length}`;
}

// Subscribe to Redux store changes
store.subscribe(renderTasks);

// Initial rendering
renderTasks();
