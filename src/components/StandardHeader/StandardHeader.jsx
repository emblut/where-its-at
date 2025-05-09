import GoBackBtn from '../GoBackBtn/GoBackBtn';
import SansitaHeading from '../SansitaHeading/SansitaHeading';
import CartLink from '../CartLink/CartLink';

import './StandardHeader.css';

function StandardHeader({ sansitaHeading }) {
  return (
    <header className='header'>
      <div className='header__item-wrapper'>
        <GoBackBtn />
      </div>
      <SansitaHeading sansitaHeading={sansitaHeading} />
      <div className='header__item-wrapper header__items-wrapper--justify-end'>
        <CartLink />
      </div>
    </header>
  );
}

export default StandardHeader;
