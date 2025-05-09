import SansitaHeading from '../SansitaHeading/SansitaHeading';

import './TicketWhat.css';

function TicketWhat({ name }) {
  const sansitaHeading = {
    text: name,
    classNames: 'sansita-heading sansita-heading--medium ticket__heading',
    level: '1',
  };
  return (
    <section className='ticket__what'>
      <p className='ticket__keyword'>WHAT</p>
      <SansitaHeading sansitaHeading={sansitaHeading} />
    </section>
  );
}

export default TicketWhat;
