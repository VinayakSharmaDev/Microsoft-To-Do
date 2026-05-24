//Files $ Components
import Userlist from './UserList';
import SystemList from './SystemList';

//Images
import Hamber from '../../assets/img/user-task-icon.png';
import CreateList from './CreateList';

function Taskbar(
    { isCollapsed,
        HandleCollapse,
        isTabActive,
        setIsTabActive,
        userList,
        setUserList,
        systemList   }
) {


    const HandleActiveTab = (tab) => {
        setIsTabActive(prev => prev == tab ? prev : tab);
    }


    return (
        <div className={`w-65 pr-2 flex flex-col h-full shadow-lg min-h-0 transition-transform duration-200 
        ${isCollapsed ? 'hidden' : 'block'}`}>

            <div><button onClick={HandleCollapse} title='Close sidebar'>
                <img src={Hamber} alt="" className='size-15 cursor-pointer' /></button></div>

            <div className='flex-1 min-h-0 overflow-auto custom-scrollbar'>

                <div>
                    {systemList.map((tasklist) => {
                        return (
                            <SystemList
                                key={tasklist.id}
                                tasklist={tasklist}
                                HandleActiveTab={HandleActiveTab}
                                isTabActive={isTabActive} />
                        )
                    })}
                </div>

                <div className='mx-auto my-2 border-b'></div>

                <div>
                    {userList && userList.map((tasklist) => {
                        return (
                            <Userlist
                                key={tasklist.id}
                                tasklist={tasklist}
                                HandleActiveTab={HandleActiveTab}
                                isTabActive={isTabActive} />
                        );
                    })
                    }
                </div>

            </div>


            <div className='w-full  border-t'>
                <CreateList setUserList={setUserList} />
            </div>

        </div>
    );
};

export default Taskbar;