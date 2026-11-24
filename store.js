import { createStore } from "redux";
import taskReducer from "./taskReducer";

import {
  addTask,
  removeTask,
  toggleTask,
  calculateTotalTasks,
} from "./taskActions";

// Create Redux store
const store = createStore(taskReducer);

// Subscribe to store changes
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

// Toggle task
store.dispatch(toggleTask(1));

// Remove task
store.dispatch(removeTask(2));

// Calculate total tasks
store.dispatch(calculateTotalTasks());

export default store;
