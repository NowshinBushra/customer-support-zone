import React from 'react';

const ResolvedTask = ({ resolvedTask }) => {
    return (
        <div className='w-80 md:w-md mx-auto'>
            <h3 className='text-center text-2xl md:text-3xl font-medium'>Resolved Task</h3>
            {
                resolvedTask.length == 0 ? <p className='text-center text-xl text-gray-500 mb-6'>No resolved task yet</p>

                    : <div>
                        {
                            resolvedTask.map(task => 
                                <div className='p-4 m-3 text-lg font-medium text-gray-600 shadow-lg bg-yellow-50'>{task.title}</div>)
                        }
                    </div>
            }
        </div>
    );
};

export default ResolvedTask;