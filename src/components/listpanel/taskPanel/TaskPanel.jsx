import { useState } from 'react';
import TaskInGrid from './TaskInGrid';
import TaskInList from './TaskInList';

function TaskPanel({
    isCollapsed,
    list,
    setSystemList,
    viewType,
    allLists }) {

    const [hideCompleted, setHideComleted] = useState(false);

    const HandleCompleted = () => {
        setHideComleted(prev => !prev);
    }

    const DeleteTask = (taskId, listId) => {

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


    const ToggleImportant = (taskId) => {
        setSystemList(prev =>
            prev.map(list => ({
                ...list,
                tasks: list.tasks.map(task =>
                    task.id === taskId ?
                        { ...task, important: !task.important }
                        : task
                )
            }))
        );
    };


    return (
        <div className={`custom-scrollbar px-4 pb-2 m-4 rounded-sm max-h-112 overflow-auto
            ${isCollapsed ? 'sm:mx-5' : ''} ${viewType === 'grid' ? 'bg-white shadow-sm' : ''}`}>

            <div className='sticky  top-0 z-10 w-full'>
                <ul className={`py-2  rounded-sm flex flex-1 items-center gap-4 bg-white text-sm
                    ${viewType === 'grid' ? '' : 'p-4'}`}>
                    <li className='sm:w-4.5 '></li>
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
                                        DeleteTask={DeleteTask}
                                        ToggleImportant={ToggleImportant}
                                        setSystemList={setSystemList} />
                                    :
                                    <TaskInList key={task.id}
                                        task={task}
                                        listId={list.id}
                                        DeleteTask={DeleteTask}
                                        ToggleImportant={ToggleImportant}
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
                                            DeleteTask={DeleteTask}
                                            ToggleImportant={ToggleImportant}
                                            allLists={allLists}
                                            setSystemList={setSystemList} />
                                        :
                                        <TaskInList key={task.id}
                                            task={task}
                                            listId={list.id}
                                            DeleteTask={DeleteTask}
                                            ToggleImportant={ToggleImportant}
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