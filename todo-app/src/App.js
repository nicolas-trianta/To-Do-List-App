import React, { useState } from 'react';
import './App.css';

function App() {
	const [tasks, setTasks] = useState([]); // State for the list of tasks
	const [newTask, setNewTask] = useState(''); // State for the new task input

	const handleAddTask = () => {
		if (newTask.trim() !== '') {
			setTasks([...tasks, newTask]); // Adds new task to existing task list
			setNewTask(''); // Clears the input field
		}
	};

	const handleRemoveTask = index => {
		const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
		setTasks(updatedTasks); // Update the list tasks without the removed task
	};

	return (
		<div className='App'>
			<haeder className='App-haeder'>
				<h1>To-Do List</h1>
				<input
					type='text'
					value={newTask}
					onChange={e => setNewTask(e.target.value)} // Update the new task input value
					placeholder='Add a new task'
				/>
				<button onClick={handleAddTask}>Add Task</button>
				<ul>
					{tasks.map((task, index) => (
						<li key={index}>
							{task}
							<button onClick={() => handleRemoveTask(index)}>Remove</button>
						</li>
					))}
				</ul>
			</haeder>
		</div>
	);
}

export default App;
