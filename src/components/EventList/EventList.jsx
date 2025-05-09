import useEventsStore from '../../stores/useEventsStore';

import EventCard from '../EventCard/EventCard';

import './EventList.css';

function EventList() {
  const { events } = useEventsStore();
  return (
    <section className='event-list'>
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
}

export default EventList;
