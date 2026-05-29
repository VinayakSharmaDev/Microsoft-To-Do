import { useState } from "react";
import FeatureLayout from "./FeatureLayout";

function SettingsTop({ setActiveFeature }) {

    const [toggles, setToggels] = useState({
        //Genetal
        beforeDeleting: false,
        taskToTop: false,
        startedToTop: false,
        sound: false,
        menu: false,
        reminder: false,
        darkMode: false,

        //Smart List
        important: false,
        planned: false,
        all: false,
        completed: false,
        assigned: false,
        hideEmptyList: false,
        dueToday: false,

        //Planner
        planner: false,

        //notifications
        email: false,
    });

    const closeBar = () => {
        setActiveFeature(null);
    }

    // const logVinayak = () => {
    //     console.log('Vinayak')
    // }

    const logSharma = () => {
        console.log('Sharma');
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-xl text-[#555555] font-bold">Settings</h2>
                <button onClick={closeBar} className="size-9 flex items-center justify-center text-2xl hover:bg-[#ffffff] ">⤫</button>
            </div>
            <h3 className="font-bold mt-4 text-lg ">General</h3>

            <FeatureLayout
                title={'Confirm before deleting'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'beforeDeleting'}
            />

            <FeatureLayout
                title={'Add new tasks on on top'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'taskToTop'}
            />

            <FeatureLayout
                title={'Move stated tasks to top'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'startedToTop'}
            />

            <FeatureLayout
                title={'Play complition sound'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'sound'}
            />

            <FeatureLayout
                title={'Show right-click menus'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'menu'}
            />

            <FeatureLayout
                title={'Turn on reminder notifications'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'reminder'}
            />

            <FeatureLayout
                title={'Turn on dark mode'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'darkMode'}
            />


            <h3 className="font-bold text-lg mt-6 ">Smart lists</h3>

            <FeatureLayout
                title={'Important'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'important'}
            />

            <FeatureLayout
                title={'Planned'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'planned'}
            />

            <FeatureLayout
                title={'All'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'all'}
            />

            <FeatureLayout
                title={'Completed'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'completed'}
            />

            <FeatureLayout
                title={'Assigned'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'assigned'}
            />

            <FeatureLayout
                title={'Auto-hide empty smart list'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'hideEmptyList'}
            />

            <FeatureLayout
                title={'Show \'Due Today\' tasks in My Day'}
                work={logSharma}
                toggles={toggles}
                setToggels={setToggels}
                keyName={'dueToday'}
            />


            <h3 className="font-bold text-lg mt-6 ">Connected apps</h3>

            <div>
                <FeatureLayout
                    title={'Planner'}
                    work={logSharma}
                    toggles={toggles}
                    setToggels={setToggels}
                    keyName={'planner'}
                />
                <p className="text-[12px]">Tasks assigned to you in Planner</p>
            </div>

            <h3 className="font-bold text-lg mt-6 ">Notifications</h3>

            <div>
                <FeatureLayout
                    title={'Email'}
                    work={logSharma}
                    toggles={toggles}
                    setToggels={setToggels}
                    keyName={'email'}
                />
                <p className="text-[12px]">Get notified when a list is shared with you</p>
            </div>

        </>
    );
};

export default SettingsTop;
// Imported in Settings.jsx 