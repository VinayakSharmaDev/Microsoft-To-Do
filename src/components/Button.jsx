function Button({ isOn, setToggels, work, name }) {

    const nextValue = !isOn

    const HandleButton = () => {

        setToggels(prev => ({
            ...prev,
            [name]: nextValue
        }));

        nextValue && work();
    };

    return (
        <button
            onClick={HandleButton}
            className={`group w-10 h-5 rounded-full border flex items-center cursor-pointer transition-all duration-300 hover:border-black
            ${isOn ? 'bg-[#c75b12]' : ''}
        `}
        >
            <div
                className={`size-3.5 ml-0.5 rounded-full transition-all duration-150 ease-in-out 
                ${isOn ? 'translate-x-4.75 bg-[#faf7f3]' : 'translate-x-0 bg-[#a1a1a1] group-hover:bg-black'}
            `}
            ></div>
        </button>
    );
}

export default Button;