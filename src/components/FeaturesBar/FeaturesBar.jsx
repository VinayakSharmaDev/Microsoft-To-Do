import Settings from "./settings/Settings";
import WhatsNew from './WhatsNew';
import HelpFeedback from './HelpFeedback';
import Account from './Account';

function FeaturesBar({ activeFeature, setActiveFeature }) {

    return (
        <div>
            <Settings activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
            <WhatsNew activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
            <HelpFeedback activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
            <Account activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
        </div>
    );
}

export default FeaturesBar;