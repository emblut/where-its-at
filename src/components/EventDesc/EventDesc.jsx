import SansitaHeading from '../SansitaHeading/SansitaHeading';

import './EventDesc.css';

function EventDesc({ event }) {
  const sansitaHeading = {
    text: event.name,
    classNames: 'event-desc__name sansita-heading sansita-heading--large',
    level: '2',
  };
  return (
    <div className='event-desc'>
      <SansitaHeading sansitaHeading={sansitaHeading} />
      <p className='event-desc__time'>
        {event.when.date.toLowerCase()} kl {event.when.from} - {event.when.to}
      </p>
      <p className='event-desc__place'>@ {event.where}</p>
    </div>
  );
}

export default EventDesc;
