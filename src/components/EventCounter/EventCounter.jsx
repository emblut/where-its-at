import '../../App.css';
import './EventCounter.css';

function EventCounter({ count, setCount, eventTotalPrice }) {
  const increase = () => {
    setCount((prev) => prev + 1);
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
    <div className={'counter add-to-cart__counter'}>
      <section className='counter__text'>
        <p className='total-price'>{eventTotalPrice}</p>
      </section>
      <section
        className='counter__controls'
        role='group'
        aria-label='Counter controls'
      >
        <button
          className='counter__btn'
          aria-label='Decrease'
          onClick={decrease}
        >
          -
        </button>
        <span className='counter__amount'>{count}</span>
        <button
          className='counter__btn'
          aria-label='Increase'
          onClick={increase}
        >
          +
        </button>
      </section>
    </div>
  );
}

export default EventCounter;
