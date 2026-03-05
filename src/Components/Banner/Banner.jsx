import React from 'react';
import Inprogress from '../Inprogress/Inprogress';
import Resolved from '../ResolvedTask/ResolvedTask';
import ResolvedCount from '../ResolvedCount/ResolvedCount';

const Banner = ({progressCount, resolveCount}) => {
  return (
    <div className='flex mx-auto w-1/2'>
      <div>
        <Inprogress progressCount={progressCount}></Inprogress>
      </div>

      <div>
        <ResolvedCount resolveCount={resolveCount}></ResolvedCount>
      </div>
    </div>
  );
};

export default Banner;