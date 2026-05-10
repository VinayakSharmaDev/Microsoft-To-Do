function Account({activeFeature}) {
    return (
        <div
            className={`
                h-45 w-1/4 fixed top-17.5 right-0 shadow-lg
                sm:top-9.5 md:top-11.5

                transform transition-transform duration-300 ease-in-out

                ${activeFeature === 'account'
                    ? 'opacity-100'
                    : 'opacity-0'}
            `}
        >
          "Account"
        </div>
    );
};

export default Account;