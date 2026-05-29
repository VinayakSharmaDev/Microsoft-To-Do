import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import Hamber from '../../../assets/img/menu.png';
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
        <ul className='w-full pr-4 flex items-center gap-2 sm:gap-4'>
            <li>
                <div><button onClick={HandleCollapse}
                    title='Expand Sidebar'
                    className={isCollapsed ? 'block' : 'hidden'}>
                    <img src={Hamber} alt="" className='size-12 cursor-pointer' /></button></div>
            </li>

            <li className='flex-1' >
                <div className='mt-3 flex items-center'>

                    <span className='flex items-center'>
                        <img src={list.image} alt="" className={`size-12 ${isCollapsed? 'hidden' : 'block'}`} />
                    </span>

                    <div>
                        <h2 className='max-w-40 sm:max-w-70 md:max-w-100 min-w-0 overflow-hidden text-ellipsis
                             text-[#555555] text-xl italic font-bold'>{list.name}</h2>
                        <span className={`text-[12px]
                                 ${list.name == 'My Day' ? 'block' : 'hidden'} `}>
                            {day.format('dddd, MMMM DD')}
                        </span>
                    </div>

                </div>
            </li>


            <li className={`flex items-center justify-center 
                        ${list.type == 'user' ? 'block' : 'block sm:hidden'}`}>

                <div className='relative'>
                    <button onClick={HandleMenu}
                        className='w-8 h-8 pb-4 flex items-center justify-center text-2xl hover:bg-white  '>
                        ...
                    </button>

                    <div className={` text-sm rounded-sm shadow-sm bg-white transition-all z-20
                         duration-300 ease-in-out absolute -left-35 sm:-left-15
                        ${isMenuActive ? 'top-10 opacity-100 pointer-events-auto'
                            : 'top-0 opacity-0 pointer-events-none'}`}>


                        <button onClick={() => DeleteList(list.id)}
                            className={`w-40 h-9 mx-3 flex items-center text-[#c21a25] 
                         hover:text-[#cfccccd3]
                         ${list.type == 'user' ? 'block' : 'hidden'}  `}>

                            <img src={Delete} alt="" className='size-6' />
                            Delete List
                        </button>

                        <button onClick={() => GridView()}
                            className={`w-40 h-9 mx-3 flex items-center text-[#555555]
                         hover:text-[#cfccccd3] border-gray-300
                        ${list.type == 'user' ? 'border-t block sm:hidden' : 'border-0 block'} `}>

                            <img src={Grid} alt="" className='size-6 mt-0.5' />
                            Grid View
                        </button>

                        <button onClick={() => listView()}
                            className={` w-40 h-9 mx-3 flex items-center text-[#555555]
                         hover:text-[#cfccccd3] border-t border-gray-300
                         ${list.type == 'user' ? 'block sm:hidden' : 'block'}`}>

                            <img src={List} alt="" className='size-6 ' />
                            List View
                        </button>

                    </div>


                </div>

            </li>

            <li className='items-center justify-center text-sm hidden sm:flex'>

                <button onClick={GridView}
                    className={`view-btn pr-1 flex items-center justify-center hover:bg-white
                        ${viewType == 'grid' ? 'active' : ''} `}>
                    <img src={Grid} alt="" className='size-8' /> Grid
                </button>

            </li>

            <li className='items-center justify-center text-sm hidden sm:flex'>

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