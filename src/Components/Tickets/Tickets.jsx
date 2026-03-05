import { use } from "react";
import Ticket from "./Ticket";
import Tasks from "../Tasks/Tasks";

const Tickets = ({ ticketPromise, progressCount, setProgressCount, selectedTasks, setSelectedTasks }) => {
    

    const handleTask = (ticket) => {
        // const newTasks = [...tasks, ticket];
        // setTasks(newTasks);

        console.log(ticket);
    };

    const ticketsData = use(ticketPromise);

    return (
        <div className="mx-auto">
            <h3>Customer Tickets</h3>
            {/* <p>total task: {tasks.length}</p> */}

            <div className="grid grid-cols-2">
                {
                    ticketsData.map(ticket =>
                        <Ticket key={ticket.id} progressCount={progressCount} setProgressCount={setProgressCount} handleTask={handleTask} ticket={ticket}></Ticket>)
                }
            </div>
            <div>
                <Tasks selectedTasks={selectedTasks} setSelectedTasks={setSelectedTasks}></Tasks>
            </div>

        </div>
    );

};

export default Tickets;