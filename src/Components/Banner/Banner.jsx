import React from 'react';
import Inprogress from '../Inprogress/Inprogress';
import Resolved from '../Resolved/Resolved';

const Banner = ({progressCount}) => {
  return (
    <div className='flex mx-auto w-1/2'>
      <div>
        <Inprogress progressCount={progressCount}></Inprogress>
      </div>

      <div>
        <Resolved></Resolved>
      </div>
    </div>
  );
};

export default Banner;