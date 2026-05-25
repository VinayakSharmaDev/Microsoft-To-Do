import { useState } from 'react';

import Circle from '../../../assets/img/circle.png';
import CircleTick from '../../../assets/img/circle-tick.png';
import Star from '../../../assets/img/star-outline.png';
import StarFilled from '../../../assets/img/star-filled.png';

import Delete from '../../../assets/img/delete.png';

function Task({ task, listId, setSystemList }) {

    const [TickHovering, setTickHovering] = useState(false);
    const [StarHovering, setStarHovering] = useState(false);

    const DeleteTask = (taskId) => {

        setSystemList(prev =>
            prev.map(list =>
                list.id === listId
                    ? {
                        ...list,
                        tasks: list.tasks.filter(task => task.id !== taskId)
                    }
                    : list
            )
        );
    };

    return (
        <li className="py-2 flex gap-2 items-center text-md text-[#555555] border-t border-gray-200">

            <button className='flex items-center outline-gray-400 hover:outline-1'>
                <img
                    onMouseEnter={() => setTickHovering(true)}
                    onMouseLeave={() => setTickHovering(false)}
                    src={TickHovering || task.completed ? CircleTick : Circle}
                    alt=""
                    className='size-7'
                />
            </button>

            <h3 className='flex-1'>{task.name}</h3>

            <div
                onMouseEnter={() => setStarHovering(true)}
                onMouseLeave={() => setStarHovering(false)}
                className='w-18 outline-gray-400 hover:outline-1'
            >
                <img
                    src={StarHovering ? StarFilled : Star}
                    alt=""
                    className='size-7 mx-auto'
                />
            </div>

            <button
                onClick={() => DeleteTask(task.id)}
                className='px-2 hover:outline-1'
            >
                <img src={Delete} alt="" className='size-7' />
            </button>

        </li>
    );
}

export default Task;