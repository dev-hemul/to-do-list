import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskListSlice.js"; // Путь к слайсу

const store = configureStore({
  reducer: {
    taskList: taskReducer, // Подключаем слайс задач в reducer
  },
});

export default store;