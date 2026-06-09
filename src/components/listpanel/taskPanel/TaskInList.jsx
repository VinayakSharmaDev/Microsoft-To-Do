import { useState } from 'react';

import Circle from '../../../assets/img/circle.png';
import CircleTick from '../../../assets/img/circle-tick.png';
import Star from '../../../assets/img/star-outline.png';
import StarFilled from '../../../assets/img/star-filled.png';

import Delete from '../../../assets/img/delete.png';

function TaskInList({ task, listId, DeleteTask, ToggleImportant, HandleCompletion }) {

    const [TickHovering, setTickHovering] = useState(false);
    const [StarHovering, setStarHovering] = useState(false);


    return (
        <li className="p-2.5 my-3 bg-white rounded-sm shadow-sm flex gap-2 items-center
         text-md text-[#555555] border-t border-gray-200">

            <div className='w-full hidden sm:flex items-center '>

                <button onClick={() => HandleCompletion(task.id)}
                    className='flex items-center outline-gray-400 hover:outline-1'>
                    <img
                        onMouseEnter={() => setTickHovering(true)}
                        onMouseLeave={() => setTickHovering(false)}
                        src={TickHovering || task.completed ? CircleTick : Circle}
                        alt=""
                        className='size-7'
                    />
                </button>

                <h3 className='pl-2 flex-1 '>{task.name}</h3>

                <button onClick={() => ToggleImportant(task.id, listId)}
                    onMouseEnter={() => setStarHovering(true)}
                    onMouseLeave={() => setStarHovering(false)}
                    className='w-18 mr-2 outline-gray-400 hover:outline-1'
                >
                    <img
                        src={StarHovering || task.important ? StarFilled : Star}
                        alt=""
                        className='size-7 mx-auto'
                    />
                </button>

                <button
                    onClick={() => DeleteTask(task.id, listId)}
                    className='px-2 pr-3 hover:outline-1'
                >
                    <img src={Delete} alt="" className='size-7' />
                </button>
            </div>


            {/* Mobile View */}

            <div className='w-full flex flex-col sm:hidden'>

                <div className='ml-4 flex-1 inline-block'>
                    <h3 className='flex-1'>{task.name}</h3>
                </div>

                <div className='flex'>

                    <button onClick={() => HandleCompletion(task.id)}
                        className='ml-5 flex flex-1 items-center outline-gray-400 hover:outline-1'>
                        <img
                            onMouseEnter={() => setTickHovering(true)}
                            onMouseLeave={() => setTickHovering(false)}
                            src={TickHovering || task.completed ? CircleTick : Circle}
                            alt=""
                            className='size-7'
                        />
                    </button>

                    <button onClick={() => ToggleImportant(task.id, listId)}
                        onMouseEnter={() => setStarHovering(true)}
                        onMouseLeave={() => setStarHovering(false)}
                        className='w-18 mr-2 outline-gray-400 hover:outline-1'
                    >
                        <img
                            src={StarHovering || task.important ? StarFilled : Star}
                            alt=""
                            className='size-7 mx-auto'
                        />
                    </button>

                    <button
                        onClick={() => DeleteTask(task.id, listId)}
                        className='px-3 hover:outline-1'
                    >
                        <img src={Delete} alt="" className='size-7' />
                    </button>

                </div>


            </div>

        </li>
    );
};

export default TaskInList;


