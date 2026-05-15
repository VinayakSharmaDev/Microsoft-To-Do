//Packages
import { useState } from 'react';

//Components
import Header from './components/Header/Header';
import Taskbar from './components/Taskbar/Taskbar';
// import FeaturesBar from './components/FeaturesBar/FeaturesBar.jsx';
import FeaturesBar from './components/FeaturesBar/FeaturesBar';
import './App.css'
import TasksHeader from './components/listpanel/ListHeader';

function App() {

  //active the featureBar and through button from Header.jsx
  const [activeFeature, setActiveFeature] = useState(null);
  const toggleFeature = (feature) => {
    setActiveFeature(prev => prev === feature ? null : feature)
  };

  //Collapse/Expand Taskbar menu
  const [isCollapsed, setIsCollapsed] = useState(false);

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
          <Taskbar isCollapsed={isCollapsed} HandleCollapse={HandleCollapse} />
        </aside>

        <main className='flex flex-1'>
          <div className='flex-1'>
            <TasksHeader isCollapsed={isCollapsed} HandleCollapse={HandleCollapse} />
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
