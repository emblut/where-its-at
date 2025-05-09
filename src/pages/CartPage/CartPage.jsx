import { useState, useEffect, useRef } from 'react';

import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

import useCartStore from '../../stores/useCartStore';
import useArenasStore from '../../stores/useArenasStore';
import useTicketsStore from '../../stores/useTicketsStore';
import useExistingIdsStore from '../../stores/useExistingIdsStore';

import checkIfEmptyArr from '../../utils/checkIfEmptyArr';

import StandardHeader from '../../components/StandardHeader/StandardHeader';
import CartList from '../../components/CartList/CartList';
import Button from '../../components/Button/Button';

import '../../App.css';
import './CartPage.css';

function CartPage() {
  const formRef = useRef(null);

  const { cart, clearCart } = useCartStore();
  const { arenas, updateRemainingTickets, updateRemainingTicketsSection } =
    useArenasStore();
  const { addTicket } = useTicketsStore();
  const { existingIds, addId } = useExistingIdsStore();

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
  const [showConfetti, setShowConfetti] = useState(false);

  const [width, height] = useWindowSize();

  const sansitaHeading = {
    text: 'Order',
    classNames: 'sansita-heading',
    level: '1',
  };

  const button = {
    text: 'Place order',
    classNames: 'cta-btn',
    type: 'submit',
  };

  const isEmptyCart = checkIfEmptyArr(cart);

  function calculateTotalPrice() {
    return cart.reduce((sum, cartEvent) => {
      return sum + cartEvent.price * cartEvent.amount;
    }, 0);
  }
  function findUnavailableSeats() {
    return cart.filter((event) => {
      return arenas[event.id].remaining < event.amount;
    });
  }
  function findMissingSectionInfo(formData) {
    return cart.filter((event) => {
      return !formData.get(event.id);
    });
  }

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const unavailableTickets = findUnavailableSeats();
    const missingSectionInfo = findMissingSectionInfo(formData);

    function generateTicketId() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let id = '';
      for (let i = 0; i < 5; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return id;
    }
    function generateUniqueId() {
      const id = generateTicketId();
      return existingIds.includes(id) ? generateUniqueId(existingIds) : id;
    }
    function closeConfetti(miliseconds) {
      const timer = setTimeout(() => setShowConfetti(false), miliseconds);
      return () => clearTimeout(timer);
    }

    if (
      unavailableTickets.length === 0 &&
      missingSectionInfo.length === 0 &&
      !isEmptyCart
    ) {
      cart.forEach((event) => {
        const chosenSection = formData.get(event.id);
        const seats = arenas[event.id].sections[chosenSection].seats;
        const numberStart = arenas[event.id].sections[chosenSection].start;

        const firstAvailableSeat = seats.findIndex((takenSeat) => {
          return takenSeat == false;
        });

        for (
          let i = firstAvailableSeat;
          i < firstAvailableSeat + event.amount;
          i++
        ) {
          const id = generateUniqueId();
          addId(id);
          addTicket({
            ...event,
            section: chosenSection,
            seat: i + 1 + numberStart,
            tickedId: id,
          });
        }
        updateRemainingTicketsSection(event, chosenSection, firstAvailableSeat);
      });
      updateRemainingTickets(cart);
      clearCart();
      setShowConfetti(true);
      closeConfetti(5000);
    } else {
      // Har inte ordentligt felhantera detta än!
      console.log('Ooops');
    }
  }

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  return (
    <>
      <StandardHeader sansitaHeading={sansitaHeading} />
      <main>
        <div className='cart-page'>
          {showConfetti && <Confetti width={width} height={height} />}
          <form ref={formRef} onSubmit={handleSubmit} className='cart-form'>
            <div className='cart-form__top-container'>
              <CartList />
            </div>
            {isEmptyCart && (
              <p className='empty-arr-text'>Looks like your cart is empty.</p>
            )}
            <section className='cart-form__bottom'>
              <p className='cart-form__text'>Total order value</p>
              <p className='total-price'>{totalPrice} sek</p>
              <Button button={button} />
            </section>
          </form>
        </div>
      </main>
    </>
  );
}

export default CartPage;
