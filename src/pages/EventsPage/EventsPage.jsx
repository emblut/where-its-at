import StandardHeader from '../../components/StandardHeader/StandardHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import EventList from '../../components/EventList/EventList';
import EventCard from '../../components/EventCard/EventCard';

import './EventsPage.css';

function EventsPage() {
  const sansitaHeading = {
    text: 'Events',
    classNames: 'sansita-heading',
    level: '1',
  };

  return (
    <>
      <StandardHeader sansitaHeading={sansitaHeading} />
      <main>
        <div className='events-page'>
          <SearchBar />
          <EventList />
          <EventCard />
        </div>
      </main>
    </>
  );
}

export default EventsPage;
