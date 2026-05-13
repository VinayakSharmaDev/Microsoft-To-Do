function Account({ activeFeature, setActiveFeature }) {

    const closeBar = () => {
        setActiveFeature(null);
        console.log(activeFeature);
    }

    return (
        <div
            className={`
                h-45 w-1/4 p-2 fixed top-17.5 right-0 shadow-lg
                sm:top-9.5 md:top-11.5

                transform transition-transform duration-300 ease-in-out

                ${activeFeature === 'account'
                    ? 'opacity-100'
                    : 'opacity-0'}
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