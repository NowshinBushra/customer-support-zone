import React from 'react';

const Ticket = ({ ticket }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">
                        {ticket.title}
                        <div className="badge badge-secondary justify-end">{ticket.status}</div>
                    </h2>
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