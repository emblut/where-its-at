import './TicketWhen.css';

function TicketWhen({ when }) {
  const dateAndMonth = when.date.split(' ');
  const date = dateAndMonth[0];
  const croppedMonth = dateAndMonth[1].slice(0, 3);

  return (
    <section className='ticket__when'>
      <div className='ticket__when-container'>
        <p className='ticket__keyword'>WHEN</p>
        <p className='ticket__when-text'>
          {date} {croppedMonth}
        </p>
      </div>
      <div className='ticket__when-container ticket__when-container--borders'>
        <p className='ticket__keyword'>FROM</p>
        <p className='ticket__when-text'>{when.from}</p>
      </div>
      <div className='ticket__when-container'>
        <p className='ticket__keyword'>TO</p>
        <p className='ticket__when-text'>{when.to}</p>
      </div>
    </section>
  );
}

export default TicketWhen;
