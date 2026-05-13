import Button from "../../Button";

function FeatureLayout({ title, work, keyName, setToggels, toggles }) {
    return (
        < div className="mt-3 mb-1 text-[15px] font-semibold " >
            <h4 className="text-[#555555]">{title}</h4>
            <div className="flex items-center gap-1 text-sm font-normal">
                <Button work={work} isOn={toggles[keyName]} setToggels={setToggels} name={keyName} />
                <span className="mt-0.5 text-center flex items-center justify-center"> {toggles[keyName] ? "On" : "Off"}</span>
            </div>
        </div>
    );
}

export default FeatureLayout;