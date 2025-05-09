import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import useArenasStore from '../../stores/useArenasStore';

import './EventCard.css';

function EventCard({ event }) {
  const [price, setPrice] = useState({
    text: event?.price === 0 ? 'Free' : `${event?.price} sek`,
    classNames: 'event-card__price',
  });

  const { arenas } = useArenasStore();
  useEffect(() => {
    if (event && arenas[event.id]?.remaining === 0) {
      setPrice({
        text: 'Sold Out',
        classNames: 'event-card__price event-card__price--red',
      });
    }
  }, [arenas, event]);

  if (!event) return null;
  return (
    <Link to={`/event/${event.id}`}>
      <article className='event-card'>
        <div className='event-card__date-container'>
          <p className='event-card__date'>{event.when.date.split(' ')[0]}</p>
          <p className='event-card__month'>
            {event.when.date.split(' ')[1].substring(0, 3).toUpperCase()}
          </p>
        </div>
        <div className='event-card__right-container'>
          <h2 className='event-card__name'>{event.name}</h2>
          <p className='event-card__place'>{event.where}</p>
          <div className='event-card__bottom-container'>
            <p className='event-card__time'>
              {event.when.from} - {event.when.to}
            </p>
            <p className={price.classNames}>{price.text}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default EventCard;
