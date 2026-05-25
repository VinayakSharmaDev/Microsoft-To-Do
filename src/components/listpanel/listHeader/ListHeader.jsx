import TasksHeaderLeft from './ListHeaderLeft';
// import TasksHeaderRight from './ListHeaderRight';


function ListHeader(
    { HandleCollapse,
        isCollapsed,
        isTabActive,
        allLists,
        setUserList,
        setIsTabActive,
        list,
        viewType,
        setViewType }) {


    return (
        <div className='flex items-center justify-between'>

            <TasksHeaderLeft
                HandleCollapse={HandleCollapse}
                isCollapsed={isCollapsed}
                viewType={viewType}
                setViewType={setViewType}
                isTabActive={isTabActive}
                allLists={allLists}
                setUserList={setUserList}
                setIsTabActive={setIsTabActive}
                list={list}
                 />



            {/* <TasksHeaderRight /> */}
        </div>
    );
};

export default ListHeader;