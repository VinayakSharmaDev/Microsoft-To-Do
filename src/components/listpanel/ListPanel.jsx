import ListHeader from './listHeader/ListHeader'
import TaskHeader from './taskHeader/TaskHeader';
import TaskPanel from './taskPanel/TaskPanel';

function ListPanel(
    { HandleCollapse,
        isCollapsed,
        isTabActive,
        allLists,
        setUserList,
        setIsTabActive,
        systemList,
        setSystemList }) {
    return (

        allLists.map((list) => {
            return (
                isTabActive === list.name &&
                <div key={list.id} className={isCollapsed ? '' : 'mx-3'}>
                    <ListHeader
                        isCollapsed={isCollapsed}
                        HandleCollapse={HandleCollapse}
                        isTabActive={isTabActive}
                        allLists={allLists}
                        setUserList={setUserList}
                        setIsTabActive={setIsTabActive}
                        list={list} />

                    <TaskHeader isCollapsed={isCollapsed} />

                    <TaskPanel
                        isCollapsed={isCollapsed}
                        list={list}
                        setSystemList={setSystemList}
                        systemList={systemList} />
                </div>
            );
        })

    );
};

export default ListPanel;