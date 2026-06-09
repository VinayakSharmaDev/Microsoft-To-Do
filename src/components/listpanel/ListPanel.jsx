import { useState } from 'react';

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
        setSystemList }) {

    const [viewType, setViewType] = useState("grid");

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
                        list={list}
                        viewType={viewType}
                        setViewType={setViewType} />


                    <TaskHeader isCollapsed={isCollapsed}
                        list={list}
                        setUserList={setUserList}
                        setSystemList={setSystemList} />

                    <TaskPanel
                        isCollapsed={isCollapsed}
                        list={list}
                        allLists={allLists}
                        setUserList={setUserList}
                        setSystemList={setSystemList}
                        viewType={viewType} />
                </div>
            );
        })

    );
};

export default ListPanel;