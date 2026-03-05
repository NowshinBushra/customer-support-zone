import React from 'react';

// const Inprogress = ({tasks}) => {
const Inprogress = ({progressCount}) => {
    return (
        <div>
            <p>In-Progress</p>
            
            <h3>{progressCount}</h3>
        </div>
    );
};

export default Inprogress;