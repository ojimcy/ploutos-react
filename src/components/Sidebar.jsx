import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FaBars, FaUser, FaTimes, FaWallet } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import '../assets/css/dashboard.css';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
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

  const connectWallet = () => {
    // Logic to connect the wallet and retrieve the address
    const address = '0x1234567890abcdef1234567890abcdef12345678'; 
    setWalletAddress(address);
  };

  const disconnectWallet = () => {
    setWalletAddress('');
  };

  return (
    <>
      <div className="sidenav-container">
        <div className="nav-header">
          <Link to="/dashboard" className="brand-logo">
            <img src={logo} alt="logo" className="logo-abbr" />
          </Link>
        </div>

        {(isMobileMenuOpen || !isMobileDevice) && (
          <nav className="sidebar-main">
            <ul className="menu-list">
              <li className="">
                <Link
                  to="/dashboard"
                  className={`has-arrow ${isActive('/dashboard')}`}
                  onClick={closeMobileMenu}
                >
                  <FiHome className="icon" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/presale"
                  className={`has-arrow ${isActive('/presale')}`}
                  onClick={closeMobileMenu}
                >
                  <FaUser className="icon" />
                  <span>Presale</span>
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
                  {walletAddress ? (
                    <div className="header-profile">
                      <UncontrolledDropdown>
                        <DropdownToggle className="p-0" color="empty">
                          <Button color="success"><FaWallet /> {`${walletAddress.substring(
                            0,
                            6
                          )}...${walletAddress.substring(
                            walletAddress.length - 4
                          )}`}</Button>
                        </DropdownToggle>
                        <DropdownMenu className="mt-3" end>
                          <DropdownItem onClick={disconnectWallet}>
                            Disconnect
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  ) : (
                    <Button color="success" onClick={connectWallet}>
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
