import { useState } from 'react';
import TaskInGrid from './TaskInGrid';
import TaskInList from './TaskInList';

function TaskPanel({
    isCollapsed,
    list,
    setSystemList,
    viewType }) {

    const [hideCompleted, setHideComleted] = useState(false);

    const HandleCompleted = () => {
        setHideComleted(prev => !prev);
    }


    return (
        <div className={`custom-scrollbar px-4 pb-2 m-4 rounded-sm max-h-112 overflow-auto
            ${isCollapsed ? 'mx-15' : ''} ${viewType === 'grid' ? 'bg-white shadow-sm' : ''}`}>

            <div className='sticky top-0 z-10 w-full'>
                <ul className={`py-2  rounded-sm flex flex-1 items-center gap-4 bg-white text-sm 
                    ${viewType === 'grid' ? '' : 'p-4'}`}>
                    <li className='w-5.5'></li>
                    <li className="flex-1">Title</li>
                    <li>Importance</li>
                    <li>Delete</li>
                </ul>
            </div>

            <div>
                <ul>
                    {list.tasks.filter(task => !task.completed)
                        .map(task => {
                            return (
                                viewType === 'grid' ?
                                    < TaskInGrid key={task.id}
                                        task={task}
                                        listId={list.id}
                                        setSystemList={setSystemList} />
                                    :
                                    <TaskInList key={task.id}
                                        task={task}
                                        listId={list.id}
                                        setSystemList={setSystemList} />
                            );
                        })}
                </ul>

                <div className=''>

                    <button onClick={HandleCompleted}
                        className='w-30 h-10 my-3 flex gap-2 items-center justify-center hover:outline-1'>

                        <span className={`text-2xl mb-1 transition-all duration-300 ease-in-out 
                            ${hideCompleted ? 'text-[#c75b12] rotate-90 mt-1' : ''} `}>&raquo;</span>

                        <span className={hideCompleted ? 'text-[#c75b12]' : ''}>Completed</span>
                    </button>

                    <ul className={hideCompleted ? 'block' : 'hidden'} >
                        {list.tasks.filter(task => task.completed)
                            .map(task => {
                                return (
                                    viewType === 'grid' ?
                                        < TaskInGrid key={task.id}
                                            task={task}
                                            listId={list.id}
                                            setSystemList={setSystemList} />
                                        :
                                        <TaskInList key={task.id}
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