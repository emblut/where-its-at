import { Link } from 'react-router-dom';

import './NavLink.css';

function NavLink({ link }) {
  return (
    <Link className='nav__link' to={link.path}>
      {link.name}
    </Link>
  );
}

export default NavLink;
