import dayjs from 'dayjs';

import Hamber from '../../assets/img/user-task-icon.png';
import Grid from '../../assets/img/grid-view.png';
import List from '../../assets/img/list-view.png';

function TasksHeaderLeft({ HandleCollapse, isCollapsed, setViewType, viewType }) {

    const day = dayjs();

    //defualt viewType
    const GridView = () => {
        setViewType('grid');
    }

    const listView = () => {
        setViewType('list');
    }

    return (
        <ul className='flex items-center gap-5'>
            <li>
                <div><button onClick={HandleCollapse}
                    title='Expand Sidebar'
                    className={isCollapsed ? 'block' : 'hidden'}>
                    <img src={Hamber} alt="" className='size-15 cursor-pointer' /></button></div>
            </li>
            <li>
                <div className='mt-3 flex flex-col'>
                    <h2 className='text-[#555555] text-xl italic font-bold'>My Day</h2>
                    <span className='text-[12px] '>{day.format('dddd, MMMM DD')}</span></div>
            </li>

            {/* <li className='flex items-center justify-center'>
                <button className='w-8 h-8 pb-4 flex items-center justify-center text-2xl hover:bg-white'>...</button>
            </li> */}

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
                    <img src={List} alt="" className='size-8' /> List
                </button>
            </li>

        </ul>
    );
};

export default TasksHeaderLeft;