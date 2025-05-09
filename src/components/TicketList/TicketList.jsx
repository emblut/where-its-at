import useTicketsStore from '../../stores/useTicketsStore';

import Ticket from '../../components/Ticket/Ticket';

import './TicketList.css';

function TicketList() {
  const { tickets } = useTicketsStore();

  return (
    <section className='ticket-list'>
      {tickets.map((ticket) => {
        return <Ticket ticket={ticket} />;
      })}
    </section>
  );
}

export default TicketList;
