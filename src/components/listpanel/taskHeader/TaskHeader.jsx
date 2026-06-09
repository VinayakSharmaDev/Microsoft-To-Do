import { useRef } from 'react';
import Circle from '../../../assets/img/circle.png';

function TaskHeader({ isCollapsed, list, setUserList, setSystemList }) {

    const ref = useRef(null);

    const Input = () => {
        let value = ref.current.value;
        if (!value.trim()) return;

        list.type === 'user' ?
            setUserList(prev =>
                prev.map(item => (
                    item.id === list.id ?
                        {
                            ...item,
                            tasks: [
                                ...item.tasks,
                                {
                                    name: value,
                                    id: crypto.randomUUID(),
                                    completed: false,
                                    important: false
                                }
                            ]
                        }
                        : item
                ))
            )
            :
            setSystemList(prev =>
                prev.map(item => (
                    item.id === list.id ?
                        {
                            ...item,
                            tasks: [
                                ...item.tasks,
                                {
                                    name: value,
                                    id: crypto.randomUUID(),
                                    completed: false,
                                    important: item.name === 'Important'
                                }
                            ]
                        }
                        : item
                )

                )
            );

        ref.current.value = '';
    };


    const HandleEnter = (event) => {
        event.key === 'Enter' && Input();
    }

    return (
        <div className={`px-4 p-2 m-4 flex flex-wrap items-center gap-2 bg-white rounded-sm shadow-sm 
            ${isCollapsed ? 'sm:mx-5' : ''}`}>
            <img src={Circle} alt="" className='size-7 items-center justify-center hidden sm:flex' />

            <input ref={ref}
                onKeyDown={HandleEnter}
                type="text"
                placeholder="Add a task"
                className="flex-1 px-2 outline-none" />

            <button onClick={() => Input()}
                className="w-30 mx-auto3 p-1 text-sm border hover:bg-[#f5f5f5] hover:text-[#c75b12]">Add</button>
        </div>
    );
};

export default TaskHeader;