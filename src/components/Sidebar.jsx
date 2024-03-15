import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { FaBars, FaUser, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import '../assets/css/dashboard.css';
import { Button } from 'reactstrap';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <div className="sidenav-container">
        <div className="nav-header">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="logo" className="logo-abbr" />
          </Link>
        </div>

        {(isMobileMenuOpen || !isMobileDevice) && (
          <nav className="sidebar-main">
            <ul className="menu-list">
              <li className="">
                <Link
                  to="/"
                  className={`has-arrow ${isActive('/')}`}
                  onClick={closeMobileMenu}
                >
                  <FiHome className="icon" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/app/audit-firm"
                  className={`has-arrow ${isActive('/app/audit-firm')}`}
                  onClick={closeMobileMenu}
                >
                  <FaUser className="icon" />
                  <span>Profile</span>
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/app/law-firm"
                  className={`has-arrow ${isActive('/app/law-firm')}`}
                  onClick={closeMobileMenu}
                >
                  <FiLogOut className="icon" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">
                    {isMobileDevice && (
                      <div className="navicon" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                      </div>
                    )}
                  </div>
                </div>
                <div className="navbar-nav header-right">
                  <div className="header-profile">
                    <Button color="success">Connect Wallet</Button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
