import { useState } from 'react';
import TasksHeaderLeft from './ListHeaderLeft';
// import TasksHeaderRight from './TasksHeaderRight';


function TasksHeader({ HandleCollapse, isCollapsed }) {


    const [viewType, setViewType] = useState("grid");


    return (
        <div className='flex items-center justify-between'>

            <TasksHeaderLeft
                HandleCollapse={HandleCollapse}
                isCollapsed={isCollapsed}
                viewType={viewType}
                setViewType={setViewType} />


            {/* <TasksHeaderRight /> */}
        </div>
    );
};

export default TasksHeader;