import React from 'react';
import { toast } from 'react-toastify';

const Tasks = ({ selectedTasks, removeTaskTicket, resolveCount, setResolveCount, progressCount, setProgressCount, 
                    resolvedTask, setResolvedTask}) => {

    const handleResolved = (task)=>{
        const newResolved = [...resolvedTask, task];
        setResolvedTask(newResolved);
        toast(`Your "${task.title}" task is resolved`)
    };
    const handleRemoveTask=(task)=>{
        removeTaskTicket(task)
    }

    return (
        <div className='w-80 md:w-md my-10 mx-auto'>
            <h3 className='text-center text-2xl md:text-3xl font-medium'>Task Status</h3>
            {
                selectedTasks.length==0 ? <p className='text-center text-xl text-gray-500 mb-6'>Select a ticket to add to task status</p> : ""
            }
            <div>
                {
                selectedTasks.map(task =>
                    <div key={task.id} className="card mx-auto m-3 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-lg">{task.title}</h2>
                            <div className="card-actions">
                                <button onClick={()=> {
                                    handleResolved(task)
                                    handleRemoveTask(task)
                                    setResolveCount(resolveCount+1)
                                    setProgressCount(progressCount-1)
                                }} className="btn btn-success btn-block text-base text-white">Complete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Tasks;