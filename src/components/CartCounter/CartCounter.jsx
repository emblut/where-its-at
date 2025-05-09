import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import useCartStore from '../../stores/useCartStore';
import useArenasStore from '../../stores/useArenasStore';

import findBiggestRemainingSection from '../../utils/findBiggestRemainingSection';

import SansitaHeading from '../SansitaHeading/SansitaHeading';
import SeatSections from '../SeatSections/SeatSections';

import '../../App.css';
import './CartCounter.css';

function CartCounter({ event }) {
  const [count, setCount] = useState(event.amount);
  const { increaseQuantity, decreaseQuantity } = useCartStore();
  const { arenas } = useArenasStore();

  const sansitaHeading = {
    text: event.name,
    classNames: 'cart__counter-name sansita-heading sansita-heading--xsmall',
    level: '2',
  };
  const arena = arenas[event.id];
  const remaining = findBiggestRemainingSection(arena);

  const increase = () => {
    if (count < remaining) {
      setCount((prev) => prev + 1);
    } else {
      setCount(() => remaining);
    }
  };
  const decrease = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };

  return (
    <>
      <div className='counter cart__counter'>
        <Link className='cart__counter-link' to={`/event/${event.id}`}>
          <section className='counter__text'>
            <SansitaHeading sansitaHeading={sansitaHeading} />
            <p className='cart__counter-when'>
              {event.when.date.toLowerCase()} kl {event.when.from} -{' '}
              {event.when.to}
            </p>
          </section>
        </Link>
        <section
          className='counter__controls'
          role='group'
          aria-label='Counter controls'
        >
          <button
            type='button'
            className='counter__btn'
            aria-label='Decrease'
            onClick={() => {
              decrease();
              decreaseQuantity(event);
            }}
          >
            {count === 1 ? (
              <FontAwesomeIcon className='trash-icon' icon={faTrash} />
            ) : (
              <span>-</span>
            )}
          </button>
          <span className='counter__amount'>{count}</span>
          <button
            type='button'
            className='counter__btn'
            aria-label='Increase'
            onClick={() => {
              increase();
              increaseQuantity(event, remaining);
            }}
          >
            +
          </button>
        </section>
      </div>
      <SeatSections event={event} />
    </>
  );
}

export default CartCounter;
