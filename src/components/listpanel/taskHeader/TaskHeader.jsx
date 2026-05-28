import Circle from '../../../assets/img/circle.png';

function TaskHeader({ isCollapsed }) {
    return (
        <div className={`px-4 p-2 m-4 flex flex-wrap items-center gap-2 bg-white rounded-sm shadow-sm 
            ${isCollapsed ? 'sm:mx-5' : ''}`}>
            <img src={Circle} alt="" className='size-7 items-center justify-center hidden sm:flex' />
            <input type="text" placeholder="Add a task" className="flex-1 px-2 outline-none" />
            <button className="p-1 text-sm border hover:bg-[#f5f5f5] hover:text-[#c75b12] ">Add</button>
        </div>
    );
};

export default TaskHeader;