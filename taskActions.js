// Action constants
const ADD_TASK = "task/added";
const REMOVE_TASK = "task/removed";
const TOGGLE_TASK = "task/toggled";
const CALCULATE_TOTAL_TASKS = "task/calculateTotalTasks";

// Action creators
function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

function removeTask(taskId) {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
}

function toggleTask(taskId) {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
}

function calculateTotalTasks() {
  return {
    type: CALCULATE_TOTAL_TASKS,
  };
}

// Export action creators
export { addTask, removeTask, toggleTask, calculateTotalTasks };
