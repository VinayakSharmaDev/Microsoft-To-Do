import { useState } from 'react'

import Search from '../assets/img/search-icon.png';
import Settings from '../assets/img/settings.png';
import WhatsNew from '../assets/img/whats-new.png';
import HelpFeedback from '../assets/img/help-feedback.png';
import Account from '../assets/img/account.png';



function Header() {
    //

    const [isActive, setIsActive] = useState(false);
    const [ActiveFeature, setActiveFeature] = useState(null);

    const Enable = () => {
        setIsActive(true);
    };

    const Disable = () => {
        setIsActive(false);
    };

    const toggleFeature = (feature) => {
        setActiveFeature(prev => prev === feature ? null : feature)
    };


    return (
        <>
            <header className=" px-2 py-px flex items-center justify-between bg-[#c75b12] text-[#ffffff]">
                <div className="ml-6 font-bold hover:underline ">
                    <h1><a href="">To Do: Basic Model</a></h1>
                </div>

                <div >
                    <div className="flex items-center bg-white rounded-sm hover:scale-x-101 hover:scale-y-102 transition-transform duration-150 ease-in">
                        <button onClick={Enable} className='pl-1 bg-white rounded-sm cursor-pointer'><img src={Search} alt="" className='size-7' /></button>
                        <input onClick={Enable} type="text" placeholder="Search" className={`h-7 w-85 pl-2 bg-white outline-0 placeholder:text-sm ${isActive ? 'text-[#a1a1a1]' : 'text-white'}`} />
                        <button onClick={Disable} className={`h-7 pr-2 flex items-center bg-white rounded-e-sm cursor-pointer ${isActive ? 'text-[#a1a1a1]' : 'text-white'}`}>X</button>
                    </div>
                </div>

                <div className=' flex'>
                    <button onClick={() => toggleFeature('settings')}><img src={Settings} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'settings' ? 'bg-white outline-1' : ''}`} /></button>
                    <button onClick={() => toggleFeature('whatsNew')}><img src={WhatsNew} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'whatsNew' ? 'bg-white outline-1' : ''}`} /></button>
                    <button onClick={() => toggleFeature('helpFeedback')}><img src={HelpFeedback} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'helpFeedback' ? 'bg-white outline-1' : ''}`} /></button>
                    <button onClick={() => toggleFeature('account')}><img src={Account} alt="" className={`size-11 hover:bg-[#a94e10] ${ActiveFeature == 'account' ? 'bg-white outline-1' : ''}`} /></button>
                </div>
            </header>
        </>
    );
};

export default Header;