import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterPage from './components/Footer';
import { ToastContainer } from 'react-toastify';
import FriendsProvider from './FriendsContaxtData.jsx';

export default function Layout() {
  return (
    <FriendsProvider>
      <div>
        <Navbar />
        <Outlet />
        <FooterPage />
        <ToastContainer />
      </div>
    </FriendsProvider>
  );
}
