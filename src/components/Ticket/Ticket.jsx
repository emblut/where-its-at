import TicketWhat from '../TicketWhat/TicketWhat';
import TicketWhere from '../TicketWhere/TicketWhere';
import TicketWhen from '../TicketWhen/TicketWhen';
import TicketInfo from '../TicketInfo/TicketInfo';
import TicketId from '../TicketId/TicketId';

import './Ticket.css';

function Ticket({ ticket }) {
  return (
    <article className='ticket'>
      <TicketWhat name={ticket.name} />
      <TicketWhere where={ticket.where} />
      <TicketWhen when={ticket.when} />
      <TicketInfo section={ticket.section} seat={ticket.seat} />
      <TicketId tickedId={ticket.tickedId} />
    </article>
  );
}

export default Ticket;


