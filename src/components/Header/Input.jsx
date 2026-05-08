import { useState } from 'react';
import Search from '../../assets/img/search-icon.png';

function Input() {


    const [isActive, setIsActive] = useState(false);

    const Enable = () => {
        setIsActive(true);
    };

    const Disable = () => {
        setIsActive(false);
    };

    return (
        <div >
            <div title='Search Task '
                className="w-75 mx-auto flex items-center bg-white rounded-sm hover:scale-x-101 hover:scale-y-102 transition-transform duration-150 ease-in sm:w-75 md:w-100 ">

                <button onClick={Enable}
                    className='pl-1 bg-white rounded-sm cursor-pointer'>
                    <img src={Search} alt="" 
                    className='size-7 w-9 shrink-0 lg:w-7   ' /></button>

                <input onClick={Enable} type="text" placeholder="Search"
                    className={`h-7 w-85 pl-2 flex-1 bg-white outline-0 placeholder:text-sm 
                ${isActive ? 'text-[#a1a1a1]' : 'text-white'}`} />

                <button onClick={Disable}
                    className={`h-7 pr-2  bg-white rounded-e-sm 
                ${isActive ? 'text-[#a1a1a1]' : 'text-white pointer-events-none'}`}>X</button>

            </div>
        </div>
    );
};

export default Input;