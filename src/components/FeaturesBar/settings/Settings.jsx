import SettingsBottom from "./SettingsBottom";
import SettingsTop from "./SettingsTop";



function Settings({ activeFeature, setActiveFeature }) {



    return (
        <div
            className={`custom-scrollbar h-full w-4/4 p-5 pb-13 bg-[#f5f2ed] fixed top-17.5 
                right-0 shadow-md sm:top-9.5 md:top-11.5
                transform transition-transform duration-300 ease-in-out z-50 overflow-y-scroll sm:w-2/4 lg:w-1/4

                ${activeFeature === 'settings' ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}>

            <SettingsTop activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
            <SettingsBottom />



        </div>



    );
};

export default Settings;
// Imported in FeaturesBar.jsx 