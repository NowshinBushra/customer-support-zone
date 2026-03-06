import { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticketPromise, progressCount, setProgressCount, selectedTasks, setSelectedTasks }) => {

    const ticketsData = use(ticketPromise);

    return (
        <div className="mx-auto">
            <h3 className="ms-10 my-5 text-2xl md:text-3xl font-medium ">Customer Tickets</h3>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    ticketsData.map(ticket =>
                        <Ticket key={ticket.id} ticket={ticket}
                            progressCount={progressCount} setProgressCount={setProgressCount}
                            selectedTasks={selectedTasks} setSelectedTasks={setSelectedTasks}
                            >
                        </Ticket>)
                }
            </div>

        </div>
    );

};

export default Tickets;