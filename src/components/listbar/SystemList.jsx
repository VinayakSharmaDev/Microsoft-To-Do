function SystemList({ tasklist, HandleActiveTab, isTabActive }) {
    console.log(tasklist.tasks.completed)
    return (

        <div onClick={() => HandleActiveTab(tasklist.name)}
            className={`flex items-center text-sm font-bold text-[#555555] cursor-pointer 
                ${isTabActive == tasklist.name ?
                    'bg-[#f3dfd0] text-[#c75b12]  hover:bg-[#f3dfd0] ' : 'hover:bg-[#ffffff]'}`}>

            <div className={`w-0.75 h-10 bg-[#c75b12] rounded-e-md 
                    ${isTabActive == tasklist.name ? 'opacity-100' : 'opacity-0'}`}></div>

            <img src={tasklist.image} alt=""
                className='size-10 flex items-center justify-center' />

            <h2 className='min-w-0 mx-2 flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>{tasklist.name}</h2>
            <span className='mr-3'>{(tasklist.tasks.length > 0 ? tasklist.tasks.length : '')}</span>
        </div>
    );

};

export default SystemList;