import './TicketInfo.css';

function TicketInfo({ section, seat }) {
  return (
    <section className='ticket__info'>
      <p className='ticket__keyword'>INFO</p>
      <p className='ticket__info-text'>
        Section {section} - seat {seat}
      </p>
    </section>
  );
}

export default TicketInfo;
