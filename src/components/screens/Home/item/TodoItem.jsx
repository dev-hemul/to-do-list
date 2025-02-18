import { useSelector, useDispatch } from 'react-redux';
import Check from './Check.jsx';
import cn from 'classnames';
import { BsTrash } from 'react-icons/bs';
import { toggleTask, removeTask } from "../../../../slices/taskListSlice.js";

const TodoItem = ({ todoId }) => {
  const dispatch = useDispatch();

  // Використовуємо useSelector для отримання актуальної задачі з todoId
  const todo = useSelector((state) =>
    state.taskList.tasks.find((task) => task._id === todoId)
  );

  const changeTodo = () => {
    dispatch(toggleTask(todo._id)); // Перемикаємо виконання задачі
  };

  const removeTodo = () => {
    dispatch(removeTask(todo._id)); // Видаляємо задачу
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button className="flex items-center cursor-pointer" onClick={changeTodo}>
        <Check isCompleted={todo.isCompleted} />
        <span className={cn({ 'line-through': todo.isCompleted })}>{todo.title}</span>
      </button>
      <button type="button" onClick={removeTodo}>
        <BsTrash size={22} className="text-gray-600 cursor-pointer hover:text-red-700 transition-color ease-in-out duration-300" />
      </button>
    </div>
  );
};

export default TodoItem;
