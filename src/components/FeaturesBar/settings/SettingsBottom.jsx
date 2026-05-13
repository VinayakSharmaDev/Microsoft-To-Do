import Vinayak from '../../../../public/profile.jpeg';
import X from '../../../assets/img/x.png';
import Linkedin from '../../../assets/img/linkedin.png';
import GitHub from '../../../assets/img/github.png';
import Logo from '../../../assets/img/logo-nbg.png';

function SettingsBottom() {
    return (
        <>
            <h3 className="font-bold mt-8 text-lg ">About</h3>

            <p>This Web App is a clone of
                <a className="hover:underline text-amber-700 block" href="https://to-do.live.com">Microsoft To Do</a>
                with different theme.</p>

            <h3 className="font-bold mt-4 text-lg ">Why this exist?</h3>
            <p>It is a React Project to improve skill and to me a better at developement with React.</p>

            <h3 className="font-bold mt-4 text-lg ">Build by</h3>
            <div className='flex items-center gap-3'>
                <img src={Vinayak} alt="Vinayak Sharma" className='size-20 object-cover rounded-full shadow-md' />
                <h1><a href="" className='text-2xl text-[#c75b12]'>Vinayak Sharma</a></h1>
            </div>

            <h3 className="font-bold mt-4 text-lg ">Connect at</h3>
            <a className='flex items-center gap-3 hover:underline' href=""><img src={X} alt="" className='size-15' />X</a>
            <a className='flex items-center gap-3 hover:underline' href=""><img src={Linkedin} alt="" className='size-15' />LinkedIn</a>
            <a className='flex items-center gap-3 hover:underline' href=""><img src={GitHub} alt="" className='size-15' />GitHub</a>

            <h3 className="font-bold mt-4 text-lg ">Portfolio</h3>
            <a className='flex items-center gap-3 hover:underline hover:text-[#c75b12] text-xl italic' href=""><img src={Logo} alt="" className='size-12' />Vinayak Sharma</a>
        </>
    );
};

export default SettingsBottom;
// Used in Settings.jsx 