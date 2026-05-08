function Userlist({ taskbar, HandleActiveTab, isTabActive }) {
    console.log(taskbar)
    return (
        <div onClick={() => HandleActiveTab(taskbar.name)}
            className={`flex items-center text-sm font-bold text-[#555555] cursor-pointer 
                            ${isTabActive == taskbar.name ? 'bg-[#f3dfd0] text-[#c75b12] hover:bg-[#f3dfd0]' : 'hover:bg-[#ffffff]'}`}>

            <div className={`w-0.75 h-10 bg-[#c75b12] rounded-e-md 
                                    ${isTabActive == taskbar.name ? 'opacity-100' : 'opacity-0'}`}></div>

            <img src={taskbar.image} alt="" className='size-10' />
            <h2 className='min-w-0 mx-2 flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>{taskbar.name}</h2>
            <span className='mr-3'>{taskbar.tasks.length > 0 ? taskbar.tasks.length : ''}</span>
        </div>
    );
};

export default Userlist;