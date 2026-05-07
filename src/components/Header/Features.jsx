import { useState } from 'react';

import Settings from '../../assets/img/settings.png';
import WhatsNew from '../../assets/img/whats-new.png';
import HelpFeedback from '../../assets/img/help-feedback.png';
import Account from '../../assets/img/account.png';


function Features() {

    const [ActiveFeature, setActiveFeature] = useState(null);


    const toggleFeature = (feature) => {
        setActiveFeature(prev => prev === feature ? null : feature)
    };

    return (
        <div className=' flex'>
            <button onClick={() => toggleFeature('settings')}><img src={Settings} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'settings' ? 'bg-white outline-1' : ''}`} /></button>
            <button onClick={() => toggleFeature('whatsNew')}><img src={WhatsNew} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'whatsNew' ? 'bg-white outline-1' : ''}`} /></button>
            <button onClick={() => toggleFeature('helpFeedback')}><img src={HelpFeedback} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'helpFeedback' ? 'bg-white outline-1' : ''}`} /></button>
            <button onClick={() => toggleFeature('account')}><img src={Account} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'account' ? 'bg-white outline-1' : ''}`} /></button>
        </div>
    );
};

export default Features;