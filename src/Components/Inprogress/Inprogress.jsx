import React from 'react';
import vector from "../../assets/vector1.png";

const Inprogress = ({ progressCount }) => {
    return (
        <div className='rounded-xl text-center p-12'
            style={{backgroundImage: `linear-gradient(90deg,#6D28D9,#9333EA), url(${vector})`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay"}}>

            <p className='text-xl md:text-2xl font-medium'>In-Progress</p>
            <h3 className='text-5xl font-semibold'>{progressCount}</h3>
        </div>
    );
};

export default Inprogress;