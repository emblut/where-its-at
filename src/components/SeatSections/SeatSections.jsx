import useArenasStore from '../../stores/useArenasStore';

import SeatSection from '../SeatSection/SeatSection';

import './SeatSections.css';

function SeatSections({ event }) {
  const { arenas } = useArenasStore();
  const sectionsObj = arenas[event.id].sections;

  return (
    <section className='cart__seat-sections'>
      <p className='cart__seat-text'>Choose section: </p>
      <div className='cart__seat-options'>
        {Object.keys(sectionsObj).map((section, index) => {
          return (
            <SeatSection
              event={event}
              section={section}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SeatSections;
