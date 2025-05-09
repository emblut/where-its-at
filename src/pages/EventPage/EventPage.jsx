import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import useEventsStore from '../../stores/useEventsStore';
import useCartStore from '../../stores/useCartStore';
import useArenasStore from '../../stores/useArenasStore';

import findBiggestRemainingSection from '../../utils/findBiggestRemainingSection';

import StandardHeader from '../../components/StandardHeader/StandardHeader';
import EventDesc from '../../components/EventDesc/EventDesc';
import EventCounter from '../../components/EventCounter/EventCounter';
import Button from '../../components/Button/Button';

import './EventPage.css';

function EventPage() {
  const { id } = useParams();

  const { events } = useEventsStore();
  const event = events.find((eventData) => eventData.id === id);
  const { cart, addToCart } = useCartStore();
  const { arenas } = useArenasStore();

  const [count, setCount] = useState(1);
  const [eventTotalPrice, setEventTotalPrice] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [button, setButton] = useState({
    text: 'Add to cart',
    classNames: 'cta-btn add-to-cart__btn ',
    type: 'button',
  });
  const [showMessage, setShowMessage] = useState(false);

  const sansitaHeading = {
    text: 'Event',
    classNames: 'sansita-heading',
    level: '1',
  };

  useEffect(() => {
    if (arenas[event.id].remaining === 0) {
      setErrorMsg('No remaining tickets for this event.');
      setButton({
        text: 'Sold out',
        classNames: 'cta-btn cta-btn--outlined add-to-cart__btn',
      });
    }
  }, [arenas]);

  useEffect(() => {
    setEventTotalPrice(
      event.price === 0 ? 'Free ticket' : `${event.price * count} sek`
    );
  }, [event, count]);

  function handleSubmit() {
    const currentArena = arenas[event.id];
    const remaining = findBiggestRemainingSection(currentArena);

    const eventInCart = cart.find((cartEvent) => {
      return cartEvent.id === event.id;
    });

    let cartAmount = 0;
    if (eventInCart) {
      cartAmount = eventInCart.amount;
    }

    if (count + cartAmount > remaining) {
      let errorMsg = `Only ${remaining} tickets remaining in the same section.`;
      if (cartAmount) {
        errorMsg += ` You already have ${cartAmount} in your cart.`;
      }
      setErrorMsg(errorMsg);
      setCount(remaining - cartAmount === 0 ? 1 : remaining - cartAmount);
    } else {
      addToCart(event, count);
      setCount(1);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }

  return (
    <>
      <StandardHeader sansitaHeading={sansitaHeading} />
      <main className='event-page'>
        <section className='event-info'>
          <p className='event-info__score-tickets'>
            You are about to score <br />
            some tickets to
          </p>
          <EventDesc event={event} />
        </section>
        {showMessage && <p className='added-to-cart-text'>Added to cart!</p>}
        <section className='add-to-cart'>
          <EventCounter
            count={count}
            setCount={setCount}
            eventTotalPrice={eventTotalPrice}
          />
          {errorMsg && (
            <p className='event-info__amount-error-msg'>{errorMsg}</p>
          )}
          <Button
            onClick={() => {
              handleSubmit();
            }}
            button={button}
          />
        </section>
      </main>
    </>
  );
}

export default EventPage;
