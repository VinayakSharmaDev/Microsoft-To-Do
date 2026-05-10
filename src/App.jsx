//Packages
import { useState } from 'react';

//Components
import Header from './components/Header/Header';
import Taskbar from './components/Taskbar/Taskbar';
// import FeaturesBar from './components/FeaturesBar/FeaturesBar.jsx';
import FeaturesBar from './components/FeaturesBar/FeaturesBar';
import './App.css'

function App() {

  //active the featureBar and through button from Header.jsx
  const [activeFeature, setActiveFeature] = useState(null);
  const toggleFeature = (feature) => {
    setActiveFeature(prev => prev === feature ? null : feature)
  };

  return (
    <div className='h-screen flex flex-col text-[#a1a1a1] bg-[#f5f2ed]'>
      <Header
        activeFeature={activeFeature}
        toggleFeature={toggleFeature} />

      <div className='flex flex-1 min-h-0'>

        <aside>
          <Taskbar />
        </aside>

        <main className='flex flex-1'>
          <div className='flex-1'></div>

          <div>
            <FeaturesBar activeFeature={activeFeature} />
          </div>
        </main>

      </div>

    </div>
  );
};

export default App;
