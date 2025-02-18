import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../../../slices/taskListSlice.js";

const CreateTodoField = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();
	
	const handleAddTodo = () => {
		if (title.trim()) {
			
			dispatch(addTask({
				title,
				_id: new Date().toISOString(),
				isCompleted: false
			})); // Добавляємо задачу в Redux
			setTitle(""); // Очищуємо поле
		}
	};
	
	return (
		<div
			className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20">
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				 onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
				className="bg-transparent w-full border-none outline-none"
				placeholder="Добавити нову задачу"
			/>
			<button
				onClick={handleAddTodo}
				className="ml-2 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 px-7 py-4 text-xs rounded-full shadow-md transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
  sm:px-6 sm:py-3 sm:text-base sm:shadow-lg sm:hover:scale-105"
			>
				Add
			</button>
		</div>
	);
};

export default CreateTodoField;
