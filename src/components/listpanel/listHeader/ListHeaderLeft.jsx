import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import Hamber from '../../../assets/img/user-task-icon.png';
import Grid from '../../../assets/img/grid-view.png';
import List from '../../../assets/img/list-view.png';
import Delete from '../../../assets/img/delete.png';


function TasksHeaderLeft(
    { HandleCollapse,
        isCollapsed,
        setViewType,
        viewType,
        isTabActive,
        setUserList,
        setIsTabActive,
        list }
) {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const day = dayjs();

    //defualt viewType
    const GridView = () => {
        setViewType('grid');
    }

    const listView = () => {
        setViewType('list');
    }

    const HandleMenu = () => {
        setIsMenuActive(prev => !prev);
    }

    const DeleteList = (id) => {
        setUserList(prev =>
            prev.filter(list => list.id !== id));
        setIsTabActive('My Day');
    }

    useEffect(() => {
        document.title = `To Do/${isTabActive}`;
    }, [isTabActive])


    return (
        <ul  className='flex items-center gap-4'>
            <li>
                <div><button onClick={HandleCollapse}
                    title='Expand Sidebar'
                    className={isCollapsed ? 'block' : 'hidden'}>
                    <img src={Hamber} alt="" className='size-15 cursor-pointer' /></button></div>
            </li>

            <li>
                <div className='mt-3 flex flex-col'>

                    <h2 className='max-w-70 min-w-fit text-center overflow-hidden text-ellipsis
                             text-[#555555] text-xl italic font-bold'>{list.name}</h2>

                    <span className={`text-[12px]
                                 ${list.name == 'My Day' ? 'visible' : 'invisible'} `}>
                        {day.format('dddd, MMMM DD')}
                    </span>
                </div>
            </li>

            <li className={`flex items-center justify-center 
                        ${list.type == 'user' ? 'block' : 'hidden'} `}>

                <div className='relative'>
                    <button onClick={HandleMenu}
                        className='w-8 h-8 pb-4 flex items-center justify-center text-2xl hover:bg-white  '>
                        ...
                    </button>

                    <button onClick={() => DeleteList(list.id)}
                        className={`w-40 h-9 flex items-center text-[#c21a25] 
                        text-sm rounded-sm shadow-sm bg-white transition-all duration-300 ease-in-out absolute -left-15 hover:bg-[#cfccccd3]
                        ${isMenuActive ? 'top-10 opacity-100 pointer-events-auto' : 'top-0 opacity-0 pointer-events-none'}`}>
                        <img src={Delete} alt="" className='size-6 ml-2' />
                        Delete List
                    </button>
                </div>

            </li>

            <li className='flex items-center justify-center text-sm'>

                <button onClick={GridView}
                    className={`view-btn pr-1 flex items-center justify-center hover:bg-white
                        ${viewType == 'grid' ? 'active' : ''} `}>
                    <img src={Grid} alt="" className='size-8' /> Grid
                </button>

            </li>

            <li className='flex items-center justify-center text-sm'>

                <button onClick={listView}
                    className={`view-btn  pr-1 flex items-center justify-center hover:bg-white 
                            ${viewType == 'list' ? 'active' : ''} `}>
                    <img src={List} alt="" className='size-8' />
                    List
                </button>

            </li>

        </ul>




    )
};

export default TasksHeaderLeft;