import { useState, useRef } from 'react';
import { systemList } from '../data/tasks';

import UserTabIcon from '../assets/img/user-task-icon.png';

import Hamber from '../assets/img/user-task-icon.png';

function Taskbar() {

    const createListInput = useRef(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isTabActive, setIsTabActive] = useState(null);
    const [userList, setUserList] = useState([]);

    const HandleCollapse = () => {
        isCollapsed == true ? setIsCollapsed(false) : setIsCollapsed(true);
    };

    const HandleActiveTab = (tab) => {
        setIsTabActive(prev => prev == tab ? null : tab);
    }

    const activateInput = () => {
        createListInput.current.focus();
    }

    const enterToList = (e) => {
        if (e.key === 'Enter') {
            createList();
        }
    }

    const createList = () => {
        const inputValue = createListInput.current.value;

        if (!inputValue.trim()) return;
        setUserList(prev => [...prev, { name: inputValue, image: UserTabIcon, type: 'user', id: inputValue, tasks: [] }])

        createListInput.current.value = '';
    }


    return (
        <div className={`w-65 pr-2 flex flex-col h-full shadow-lg min-h-0 transition-transform duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>

            <div><button onClick={HandleCollapse} title='Close sidebar'><img src={Hamber} alt="" className='size-15 cursor-pointer' /></button></div>

            <div className='flex-1 min-h-0 overflow-auto custom-scrollbar'>

                <div>
                    {systemList.map((taskbar) => {

                        return (
                            <div key={taskbar.id} onClick={() => HandleActiveTab(taskbar.name)}
                                className={`flex items-center text-sm font-bold text-[#555555] cursor-pointer 
                            ${isTabActive == taskbar.name ? 'bg-[#f3dfd0] text-[#c75b12]  hover:bg-[#f3dfd0] ' : 'hover:bg-[#ffffff]'}`}>

                                <div className={`w-0.75 h-10 bg-[#c75b12] rounded-e-md 
                                    ${isTabActive == taskbar.name ? 'opacity-100' : 'opacity-0'}`}></div>

                                <img src={taskbar.image} alt="" className='size-10 flex items-center justify-center' />
                                <h2 className='min-w-0 mx-2 flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>{taskbar.name}</h2>
                                <span className='mr-3'>{taskbar.tasks.length > 0 ? taskbar.tasks.length : ''}</span>
                            </div>
                        );
                    })
                    }
                </div>

                <div className=' mx-auto my-2 border-b'></div>

                <div>
                    {userList && userList.map((taskbar) => {

                        return (
                            <div key={taskbar.id} onClick={() => HandleActiveTab(taskbar.name)}
                                className={`flex items-center text-sm font-bold text-[#555555] cursor-pointer 
                            ${isTabActive == taskbar.name ? 'bg-[#f3dfd0] text-[#c75b12] hover:bg-[#f3dfd0]' : 'hover:bg-[#ffffff]'}`}>

                                <div className={`w-0.75 h-10 bg-[#c75b12] rounded-e-md 
                                    ${isTabActive == taskbar.name ? 'opacity-100' : 'opacity-0'}`}></div>

                                <img src={taskbar.image} alt="" className='size-10' />
                                <h2 className='min-w-0 mx-2 flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>{taskbar.name}</h2>
                                <span className='mr-3'>{taskbar.tasks.length > 0 ? taskbar.tasks.length : ''}</span>
                            </div>
                        );
                    })
                    }
                </div>

            </div>




            <div className='w-full  border-t'>
                <div className=' my-3 flex items-center justify-around text-[#c75b12]'> {/* h-22 */}
                    <span onClick={activateInput} className='flex items-center justify-center text-2xl font-extralight cursor-pointer'>+</span>
                    <input
                        onKeyDown={enterToList}
                        ref={createListInput}
                        type="text"
                        placeholder='New list'
                        className='px-1 text-sm outline-0' />
                    <button onClick={createList} title='Create list' className='text-[12px] cursor-pointer hover:text-[#a94e10]'>Create</button>
                </div>
            </div>

        </div>
    );
};

export default Taskbar;