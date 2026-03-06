import React from 'react';
import Inprogress from '../Inprogress/Inprogress';
import Resolved from '../ResolvedTask/ResolvedTask';
import ResolvedCount from '../ResolvedCount/ResolvedCount';

const Banner = ({progressCount, resolveCount}) => {
  return (
    <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6 text-white pt-10 px-4'>
      
      
        <Inprogress progressCount={progressCount}></Inprogress>

      
        <ResolvedCount resolveCount={resolveCount}></ResolvedCount>
      

    </div>
  );
};

export default Banner;