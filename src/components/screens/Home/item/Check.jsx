import cn from 'classnames'
import {BsCheck} from 'react-icons/bs'

export const Check = ({ isCompleted }) => {
	return (
		<div className={cn('border-2 rounded-lg border-pink-500 w-6 h-6 mr-3 flex items-center justify-center', 
		{
			'bg-pink-400': isCompleted,
		})}
		>
			{isCompleted &&
			<BsCheck size={24} className='text-gray-900' />
			}
		</div>
	)
}
