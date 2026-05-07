import Input from './Input';
import Features from './Features';

function Header() {
    //


    return (
        <>
            <header className=" px-2 py-px flex items-center justify-between bg-[#c75b12] text-[#ffffff]">
                <div className="ml-6 font-bold hover:underline ">
                    <h1><a href="">To Do: Basic Model</a></h1>
                </div>

                <Input />
                <Features />

            </header>
        </>
    );
};

export default Header;