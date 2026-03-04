import { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticketPromise }) => {

    const ticketsData = use(ticketPromise);
    console.log(ticketsData);
    return (
        <div className="mx-auto">
            <h3>Customer Tickets</h3>

            <div className="grid grid-cols-2">
                {
                    ticketsData.map(ticket =>
                        <Ticket key={ticket.id} ticket={ticket}></Ticket>)
                }
            </div>

        </div>
    );

};

export default Tickets;