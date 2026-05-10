import Settings from "./Settings";
import WhatsNew from './WhatsNew';
import HelpFeedback from './HelpFeedback';
import Account from './Account';

function FeaturesBar({ activeFeature }) {

    return (
        <> 
        <Settings activeFeature={activeFeature} />
         <WhatsNew activeFeature={activeFeature} />
          <HelpFeedback activeFeature={activeFeature} />
          <Account activeFeature={activeFeature} />
        </>
    );
}

export default FeaturesBar;

