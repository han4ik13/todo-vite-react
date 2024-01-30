import { useState } from "react"

export const CreateTodoField = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = (title) => {
		setTodos(prev => [
			{
				id: new Date(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
			<input
				type="text"
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyDown={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent border-none outline-none text-white w-full'
				placeholder='Add a task'
			/>
		</div>
	)
}
