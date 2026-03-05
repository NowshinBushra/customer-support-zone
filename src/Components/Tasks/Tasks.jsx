import React from 'react';

const Tasks = ({ selectedTasks, resolveCount, setResolveCount, progressCount, setProgressCount }) => {
    console.log(selectedTasks);
    return (
        <div>
            <h3>Task Status</h3>
            <p>Select a ticket to add to task status</p>
            {
                selectedTasks.map(task =>
                    <div className="card w-96 bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{task.title}</h2>
                            <div className="card-actions">
                                <button onClick={()=> {
                                    setResolveCount(resolveCount+1)
                                    setProgressCount(progressCount-1)
                                }} className="btn btn-primary btn-block">Complete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Tasks;