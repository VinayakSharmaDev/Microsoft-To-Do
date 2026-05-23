//Packages
import { useState } from 'react';

//Components & file
import Header from './components/header/Header';
import Taskbar from './components/listbar/Taskbar';
// import FeaturesBar from './components/FeaturesBar/FeaturesBar.jsx';
import FeaturesBar from './components/FeaturesBar/FeaturesBar';
import systemList from './data/tasks';
import ListPanel from './components/listpanel/ListPanel';

function App() {

  //active the featureBar and through button from Header.jsx
  const [activeFeature, setActiveFeature] = useState(null);
  const toggleFeature = (feature) => {
    setActiveFeature(prev => prev === feature ? null : feature)
  };

  //To switch between listTabs - Taskbar
  const [isTabActive, setIsTabActive] = useState('My Day');

  //Collapse/Expand Taskbar menu - Taskbar & ListHeaderLeft
  const [isCollapsed, setIsCollapsed] = useState(false);

  //Store user created lists - Taskbar & ListHeaderLeft
  const [userList, setUserList] = useState([]);

  //Store both systemlist & userlist
  const allLists = [...systemList, ...userList];

  //Toggle Taskbar
  const HandleCollapse = () => {
    isCollapsed == true ? setIsCollapsed(false) : setIsCollapsed(true);
  };



  return (
    <div className='h-screen flex flex-col text-[#a1a1a1] bg-[#f5f2ed]'>
      <Header
        activeFeature={activeFeature}
        toggleFeature={toggleFeature} />

      <div className='flex flex-1 min-h-0'>

        <aside>
          <Taskbar
            isCollapsed={isCollapsed}
            HandleCollapse={HandleCollapse}
            isTabActive={isTabActive}
            setIsTabActive={setIsTabActive}
            userList={userList}
            setUserList={setUserList} />
        </aside>

        <main className='flex flex-1'>
          <div className='flex-1'>
            <ListPanel isCollapsed={isCollapsed}
              HandleCollapse={HandleCollapse}
              isTabActive={isTabActive}
              allLists={allLists}
              setUserList={setUserList}
              setIsTabActive={setIsTabActive} />
          </div>

          <div>
            <FeaturesBar activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
          </div>
        </main>

      </div>

    </div>
  );
};

export default App;
