import useArenasStore from '../../stores/useArenasStore';

import './SeatSection.css';

function SeatSection({ event, section, index }) {
  const { arenas } = useArenasStore();
  const remaining = arenas[event.id].sections[section].remaining;

  return (
    <>
      {remaining >= event.amount ? (
        <div className='cart__seat-section'>
          <label className='cart__seat-label' htmlFor={section}>
            {section}
          </label>
          <input
            className='cart__seat-btn'
            id={section}
            defaultChecked={index === 0}
            value={section}
            name={event.id}
            type='radio'
          />
        </div>
      ) : remaining === 0 ? (
        <></>
      ) : (
        <div className='cart__seat-section'>
          <p className='cart__quantity-error'>
            <span className='cart__quantity-error--big'>
              {section}: {remaining}
            </span>{' '}
            seats left
          </p>
        </div>
      )}
    </>
  );
}

export default SeatSection;
