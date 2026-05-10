import { Link } from 'react-router';
import Input from './Input';
import Features from './Features';

function Header({ activeFeature, toggleFeature }) {


    return (
        <>
            <header className=" px-2 py-px flex flex-col gap-1 bg-[#c75b12] text-[#ffffff] 
            sm:flex-row sm:items-center sm:justify-between">
                <div className="hidden font-bold hover:underline sm:ml-2 md:ml-6 sm:block ">
                    <h1><Link to="/" >To Do: Basic Model</Link></h1>
                </div>

                <div className='flex items-center justify-between sm:hidden'>
                    <div className=" font-bold hover:underline sm:ml-2 md:ml-6 ">
                        <h1><Link to="/" >To Do: Basic Model</Link></h1>
                    </div>

                    <Features
                        activeFeature={activeFeature}
                        toggleFeature={toggleFeature} />

                </div>

                <Input />

                <div className='hidden sm:block'>
                    <Features
                        activeFeature={activeFeature}
                        toggleFeature={toggleFeature} />
                </div>

            </header>
        </>
    );
};

export default Header;