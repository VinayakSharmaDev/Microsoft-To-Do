function Account({ activeFeature, setActiveFeature }) {

    const closeBar = () => {
        setActiveFeature(null);
    }

    return (
        <div
            className={`
                w-3/4 p-2 fixed top-17.5 right-0 shadow-md
                sm:top-9.5 md:top-11.5 bg-[#f5f2ed] z-10 
                transform transition-transform duration-300 ease-in-out
                sm:w-2/4 lg:w-1/4

                ${activeFeature === 'account' ?
                    'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}
            `}
        >
            <div className="w-full flex justify-end">
                <button onClick={closeBar} className="size-9 flex items-center justify-center text-2xl hover:bg-[#ffffff]" >⤫</button>
            </div>

            <div className="p-5">
                App currently works on <strong className="text-amber-700">Local Storage</strong> Since I don't know about Backend and Database
            </div>

        </div>
    );
};

export default Account;