import './TicketWhere.css';

function TicketWhere({ where }) {
  return (
    <section className='ticket__where'>
      <p className='ticket__keyword'>WHERE</p>
      <h2 className='ticket__location'>{where}</h2>
      <p className='ticket__location-details'>
        Göteborgs universitet. Pedagogen, hus A
      </p>
    </section>
  );
}

export default TicketWhere;
