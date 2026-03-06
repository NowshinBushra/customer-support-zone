import React from 'react';
import vector from "../../assets/vector1.png";

const ResolvedCount = ({resolveCount}) => {
    return (
        <div className='rounded-xl text-center p-12'
             style={{backgroundImage: `linear-gradient(90deg,#22C55E,#059669), url(${vector})`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay"}}>
                        
            <p className='text-xl md:text-2xl font-medium'>Resolved</p>
            <h3 className='text-5xl font-semibold'>{resolveCount}</h3>
        </div>
    );
};

export default ResolvedCount;