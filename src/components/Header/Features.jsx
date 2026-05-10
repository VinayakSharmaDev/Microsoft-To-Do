//componentes
import Feature from './Feature';

//Images
import Settings from '../../assets/img/settings.png';
// import WhatsNew from '../../assets/img/whats-new.png';
// import HelpFeedback from '../../assets/img/help-feedback.png';
import Account from '../../assets/img/account.png';


function Features({ activeFeature, toggleFeature }) {


    return (
        <div className='flex'>

            <Feature
                toggleFeature={toggleFeature}
                feature={'settings'}
                img={Settings}
                activeFeature={activeFeature}
                title={'Settings'} />

            {/* <Feature
                toggleFeature={toggleFeature}
                feature={'whatsNew'}
                img={WhatsNew}
                activeFeature={activeFeature}
                title={'What\'s new'} />

            <Feature
                toggleFeature={toggleFeature}
                feature={'helpFeedback'}
                img={HelpFeedback}
                activeFeature={activeFeature}
                title={'Help & Feedback'} /> */}

            <Feature
                toggleFeature={toggleFeature}
                feature={'account'}
                img={Account}
                activeFeature={activeFeature}
                title={'Account'} />


        </div>
    );
};

export default Features;
// Imported in Features.jsx