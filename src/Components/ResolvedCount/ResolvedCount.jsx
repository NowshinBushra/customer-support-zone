import React from 'react';

const ResolvedCount = ({resolveCount}) => {
    return (
        <div>
            <p>Resolved</p>
            <h3>{resolveCount}</h3>
        </div>
    );
};

export default ResolvedCount;