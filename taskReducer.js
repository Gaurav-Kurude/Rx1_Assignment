const initialState = {
  tasks: [],
  totalTasks: 0,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "task/added":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "task/removed": {
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload,
      );

      return {
        ...state,
        tasks: updatedTasks,
        totalTasks: updatedTasks.length,
      };
    }

    case "task/toggled":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };

    case "task/calculateTotalTasks":
      return {
        ...state,
        totalTasks: state.tasks.length,
      };

    default:
      return state;
  }
}

export default taskReducer;
