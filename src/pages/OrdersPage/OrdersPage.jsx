import useTicketsStore from '../../stores/useTicketsStore';

import checkIfEmptyArr from '../../utils/checkIfEmptyArr';

import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import CartLink from '../../components/CartLink/CartLink';
import TicketList from '../../components/TicketList/TicketList';

import '../../App.css';
import './OrdersPage.css';

function OrdersPage() {
  const { tickets } = useTicketsStore();
  const isEmptyTickets = checkIfEmptyArr(tickets);

  return (
    <div className='orders-page-wrapper'>
      <header className='orders-header'>
        <GoBackBtn />
        <CartLink />
      </header>
      <main>
        <div className='orders-page'>
          {isEmptyTickets ? (
            <p className='empty-arr-text'>You have no previous purchases.</p>
          ) : (
            <TicketList />
          )}
        </div>
      </main>
    </div>
  );
}

export default OrdersPage;
