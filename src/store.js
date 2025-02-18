import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskListSlice.js";

const store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
});

export default store;