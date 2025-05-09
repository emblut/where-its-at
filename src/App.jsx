import { useState, useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';

import router from './router/router';

import useEventsStore from './stores/useEventsStore';
import useArenasStore from './stores/useArenasStore';

import fetchEvents from './services/fetchEvents';
import createArenas from './services/createArenas';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import './App.css';

function App() {
  const { events, setEvents } = useEventsStore();
  const { addArena } = useArenasStore();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = () => {
      fetchEvents()
        .then((response) => {
          setEvents(response.data.events);
          createArenas(response, addArena);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
        });
    };
    fetchData();
  }, []);

  if (isLoading || !events) {
    return <LoadingScreen />;
  }

  return <RouterProvider router={router} />;
}

export default App;
