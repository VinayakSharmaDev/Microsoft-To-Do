import SettingsBottom from "./SettingsBottom";
import SettingsTop from "./SettingsTop";



function Settings({ activeFeature, setActiveFeature }) {



    return (
        <div
            className={`custom-scrollbar h-full w-1/4 p-5 pb-12 fixed top-17.5 right-0 shadow-lg sm:top-9.5 md:top-11.5
                transform transition-transform duration-300 ease-in-out z-50 overflow-y-scroll
                ${activeFeature === 'settings' ? 'translate-x-0' : 'translate-x-full'}`}>

            <SettingsTop activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
            <SettingsBottom />



        </div>



    );
};

export default Settings;
// Imported in FeaturesBar.jsx 