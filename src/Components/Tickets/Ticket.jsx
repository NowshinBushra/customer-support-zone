import React from 'react';

const Ticket = ({ ticket, handleTask, progressCount, setProgressCount }) => {

    return (
        <div onClick={()=>{
            handleTask()
            setProgressCount(progressCount+1)
        }}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">
                        {ticket.title}</h2>
                        {
                            ticket.status==="Open"? <div className="badge badge-success">{ticket.status}</div>
                                                  : <div className="badge badge-warning">{ticket.status}</div>
                        }
                    <p>{ticket.description}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{ticket.id}</div>
                        <div className="badge badge-outline">{ticket.priority}</div>
                        <div className="badge badge-outline">{ticket.customer}</div>
                        <div className="badge badge-outline">{ticket.createdAt}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;