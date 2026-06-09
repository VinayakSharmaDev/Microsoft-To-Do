import { useState } from 'react';

import Circle from '../../../assets/img/circle.png';
import CircleTick from '../../../assets/img/circle-tick.png';
import Star from '../../../assets/img/star-outline.png';
import StarFilled from '../../../assets/img/star-filled.png';

import Delete from '../../../assets/img/delete.png';

function Task({ task, listId, DeleteTask, ToggleImportant, HandleCompletion }) {

    const [TickHovering, setTickHovering] = useState(false);
    const [StarHovering, setStarHovering] = useState(false);

    return (
        <li className="py-2 flex flex-col  text-md text-[#555555] border-t border-gray-200">

            <div className="py-2 flex gap-2 items-center text-md text-[#555555]">
                <button onClick={() => HandleCompletion(task.id)}
                    className='hidden sm:flex items-center outline-gray-400 hover:outline-1'>
                    <img
                        onMouseEnter={() => setTickHovering(true)}
                        onMouseLeave={() => setTickHovering(false)}
                        src={TickHovering || task.completed ? CircleTick : Circle}
                        alt=""
                        className='size-7'
                    />
                </button>

                <h3 className='pl-2 sm:pl-0 flex-1'>{task.name}</h3>

                <button onClick={() => ToggleImportant(task.id, listId)}
                    onMouseEnter={() => setStarHovering(true)}
                    onMouseLeave={() => setStarHovering(false)}
                    className='w-18 outline-gray-400 hover:outline-1 hidden sm:block'
                >
                    <img
                        src={StarHovering || task.important ? StarFilled : Star}
                        alt=""
                        className='size-7 mx-auto bg'
                    />
                </button>

                <button
                    onClick={() => DeleteTask(task.id, listId)}
                    className='px-2 hover:outline-1 hidden sm:block'
                >
                    <img src={Delete} alt="" className='size-7' />
                </button>
            </div>


{/*  Mobile view  */}


            <div className='flex items-center'>
                <button onClick={() => HandleCompletion(task.id)}
                className='flex-1 sm:hidden items-center outline-gray-400 hover:outline-1'>
                    <img
                        onMouseEnter={() => setTickHovering(true)}
                        onMouseLeave={() => setTickHovering(false)}
                        src={TickHovering || task.completed ? CircleTick : Circle}
                        alt=""
                        className='size-7 mx-3.5'
                    />
                </button>

                <button onClick={() => ToggleImportant(task.id, listId)}
                    onMouseEnter={() => setStarHovering(true)}
                    onMouseLeave={() => setStarHovering(false)}
                    className='w-18 mr-2.5 outline-gray-400 hover:outline-1 sm:hidden'
                >
                    <img
                        src={StarHovering || task.important ? StarFilled : Star}
                        alt=""
                        className='size-7 mx-auto'
                    />
                </button>

                <button
                    onClick={() => DeleteTask(task.id)}
                    className='px-2 hover:outline-1 sm:hidden'
                >
                    <img src={Delete} alt="" className='size-7' />
                </button>
            </div>




        </li>
    );
}

export default Task;