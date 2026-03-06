import { toast } from "react-toastify";

const Ticket = ({ ticket, setProgressCount, selectedTasks, setSelectedTasks }) => {

    const handleTask = (ticket) => {
        const exists = selectedTasks.find(t => t.id === ticket.id);
        if (!exists) {
            const newTasks = [...selectedTasks, ticket];
            setSelectedTasks(newTasks);
            setProgressCount(prev => prev + 1);
            toast(`"${ticket.title}" ticket is added to your task status`)
        }
    };

    return (
        <div onClick={() => {
            handleTask(ticket)
        }}>
            <div className="card bg-base-100 mx-auto w-80 md:w-lg shadow-sm">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">
                            {ticket.title}</h2>
                        {
                            ticket.status === "Open" ? <div className={`text-xs px-3 py-1 rounded-2xl md:text-base bg-green-200`}>
                                                    <span className="rounded-xl px-2.5 me-1.5 bg-green-500"></span>{ticket.status}</div>
                                        :  <div className={`text-xs px-3 py-1 rounded-2xl md:text-base bg-yellow-200`}>
                                        <span className="rounded-xl px-2.5 me-1.5 bg-yellow-500"></span>{ticket.status}</div>
                        }
                    </div>
                    <p className='text-base font-medium text-gray-500'>{ticket.description}</p>

                    <div className='flex justify-between items-center text-sm'>
                        <div className="md:flex gap-3">
                            <div className="font-medium text-gray-500">#{ticket.id}</div>
                            <div className={`font-medium ${ticket.priority === "HIGH" ? 'text-red-600' : (ticket.priority === "LOW" ? 'text-green-500' : 'text-yellow-500')}`}>
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