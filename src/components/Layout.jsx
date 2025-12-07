import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollEffect } from '../hooks/useScrollEffect';

const Layout = () => {
  // initialize scroll animations for elements with .fade-in-up
  useScrollEffect();

  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;