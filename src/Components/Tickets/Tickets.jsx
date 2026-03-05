import { use } from "react";
import Ticket from "./Ticket";
import Tasks from "../Tasks/Tasks";

const Tickets = ({ ticketPromise, progressCount, setProgressCount, selectedTasks, setSelectedTasks }) => {

    const ticketsData = use(ticketPromise);

    return (
        <div className="mx-auto">
            <h3>Customer Tickets</h3>

            <div className="grid grid-cols-2">
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