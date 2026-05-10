function HelpFeedback({activeFeature}) {
    return (
          <div
            className={`
                h-full w-1/4 fixed top-17.5 right-0 shadow-lg
                sm:top-9.5 md:top-11.5

                transform transition-transform duration-300 ease-in-out

                ${activeFeature === 'helpFeedback'
                    ? 'translate-x-0'
                    : 'translate-x-full'}
            `}
        >
          Help & Feedback
        </div>
    );
};

export default HelpFeedback;