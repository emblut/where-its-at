import NavLink from '../NavLink/NavLink';

import './NavBar.css';

function NavBar() {
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Events',
      path: '/events',
    },
    {
      name: 'Orders',
      path: '/orders',
    },
  ];

  return (
    <nav className='nav'>
      {links.map((link) => {
        return <NavLink key={link.name} link={link} />;
      })}
    </nav>
  );
}

export default NavBar;
