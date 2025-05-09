import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import '../../App.css'

function Layout() {
  return (
    <div className='page-wrapper'>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default Layout;
