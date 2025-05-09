import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import './CartLink.css';

function CartLink() {
  return (
    <Link className='cart-link' to='/cart'>
      <FontAwesomeIcon
        className='cart-icon'
        inverse
        icon={faBagShopping}
        style={{ fontSize: "36px" }}
      />
      <p className='cart-link__text'>Cart </p>
    </Link>
  );
}

export default CartLink;
