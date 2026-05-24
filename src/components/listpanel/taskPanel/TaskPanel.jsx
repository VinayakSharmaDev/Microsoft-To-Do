import { useState } from 'react';
import Task from './Task';

function TaskPanel({ isCollapsed, list, systemList, setSystemList }) {

    const [hideCompleted, setHideComleted] = useState(false);

    const HandleCompleted = () => {
        setHideComleted(prev => !prev);
    }


    return (
        <div className={`custom-scrollbar px-4 pb-2 m-4 bg-white rounded-sm shadow-sm max-h-112 overflow-auto
            ${isCollapsed ? 'mx-15' : ''}`}>

            <div >
                <ul className="py-2 flex items-center gap-4 text-sm">
                    <li className='w-5.5'></li>
                    <li className="flex-1">Title</li>
                    <li>Importance</li>
                    <li>Delete</li>
                </ul>
            </div>

            <div>
                <ul>
                    {list.tasks.map((task) => {
                        return (
                            !task.completed &&
                            < Task key={task.id}
                                task={task}
                                listId={list.id}
                                setSystemList={setSystemList}
                                systemList={systemList} />

                        );
                    })}
                </ul>

                <div className=''>

                    <button onClick={HandleCompleted}
                        className='w-30 h-10 flex gap-2 items-center justify-center hover:outline-1'>

                        <span className={`text-2xl mb-1 transition-all duration-300 ease-in-out 
                            ${hideCompleted ? 'text-[#c75b12] rotate-90 mt-1' : ''} `}>&raquo;</span>

                        <span className={hideCompleted ? 'text-[#c75b12]' : ''}>Completed</span>
                    </button>

                    <ul className={hideCompleted ? 'block' : 'hidden'} >
                        {list.tasks.map((task) => {
                            return (
                                task.completed &&
                                < Task key={task.id}
                                    task={task}
                                    listId={list.id}
                                    setSystemList={setSystemList} />

                            );
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default TaskPanel;