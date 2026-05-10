function Feature({title, toggleFeature, feature, img, activeFeature }) {
    return (
        <button onClick={() => toggleFeature(feature)} title={title} >
            <img src={img} alt=""
                className={`size-9 hover:bg-[hsl(24,83%,36%)] md:size-11 
                            ${activeFeature == feature ? 'bg-white outline-1' : ''}`} /></button>
    );
};

export default Feature;