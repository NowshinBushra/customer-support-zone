
const Ticket = ({ ticket, progressCount, setProgressCount, selectedTasks, setSelectedTasks }) => {

    const handleTask = (ticket) => {
        const exists = selectedTasks.find(t => t.id === ticket.id);
        if (!exists) {
            const newTasks = [...selectedTasks, ticket];
            setSelectedTasks(newTasks);
        }
    };

    return (
        <div onClick={() => {
            handleTask(ticket)
            setProgressCount(progressCount + 1)
        }}>
            <div className="card bg-base-100 mx-auto w-80 md:w-lg shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">
                        {ticket.title}</h2>
                    <div className={`text-base ${ticket.status === "Open" ? "badge badge-success" : "badge badge-warning"}`}>{ticket.status}</div>
                    <p className='text-base font-medium text-gray-500'>{ticket.description}</p>

                  <div className='flex justify-between items-center text-sm'>
                    <div className="md:flex gap-3">
                        <div className="font-medium text-gray-500">#{ticket.id}</div>
                        <div className={`font-medium ${ticket.priority==="HIGH"? 'text-red-600' : (ticket.priority==="LOW" ?'text-green-500' : 'text-yellow-500')}`}>
                            {ticket.priority} PRIORITY</div>
                    </div>

                    <div className='md:flex gap-3 text-gray-600'>
                        <div>{ticket.customer}</div>
                        <div>{ticket["created-at"]}</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;