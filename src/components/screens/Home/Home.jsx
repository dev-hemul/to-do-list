import TodoItem from "./item/TodoItem.jsx";
import {useSelector} from "react-redux";
import CreateTodoField from "./create-todo-field/CreateTodoField.jsx";

const Home = () => {
	const todos = useSelector((state) => state.taskList.tasks);
	
	return (
		<div className="text-white w-4/5 mx-auto">
			<h1 className="text-2xl font-bold text-center mb-8">Todo</h1>
			{todos.length === 0 ? (
				<p
					className="text-center text-lg text-gray-500 font-semibold animate-pulse">
					Список задач порожний
				</p>
			
			
			) : (
				todos.map((todo) => (
					<TodoItem key={todo._id} todoId={todo._id}/> // Передаем только todoId в TodoItem
				))
			)}
			<CreateTodoField/>
		</div>
	);
};

export default Home;
