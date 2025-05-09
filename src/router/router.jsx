import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import LandingPage from '../pages/LandingPage/LandingPage';
import EventsPage from '../pages/EventsPage/EventsPage';
import EventPage from '../pages/EventPage/EventPage';
import CartPage from '../pages/CartPage/CartPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'event/:id',
        element: <EventPage />,
      },
      { path: 'cart', element: <CartPage /> },
      { path: 'orders', element: <OrdersPage /> },
    ],
    errorElement: <h1>This is not the page you are looking for.</h1>,
  },
]);

export default router;
