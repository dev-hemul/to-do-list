import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task._id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    // Перемикання виконання задачі
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task._id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
