import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex mx-auto w-1/2'>
        <div>
          <p>In-Progress</p>
          <h3>0</h3>
        </div>

        <div>
          <p>Resolved</p>
          <h3>0</h3>
        </div>
      </div>
        </div>
    );
};

export default Banner;