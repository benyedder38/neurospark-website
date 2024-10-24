import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function NavBar() {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  React.useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="navbar-logo-img" id="logo-logo" src={`${process.env.PUBLIC_URL}/images/neurosparklogo-only.jpg`} alt="NeuroSpark Logo" />
            <img className="navbar-logo-img" id="logo-text" src={`${process.env.PUBLIC_URL}/images/neurosparklogo-text.jpg`} alt="NeuroSpark Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                CONTACT US
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  )
}

export default NavBar