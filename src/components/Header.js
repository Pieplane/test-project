import React from 'react';
import '../styles/components/header.css';



const Header = ({toggleMenu}) => {
return(
    <div>
        <header className="header">
          <img src="/images/logo.png" alt="Logo" className="header__logo" />
          <img src="images/Profile.png" alt="Profile" className='header__auth' />
          <img src="images/menu.png" alt="Menu" className='header__menu' onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
        </header>
    </div>
    
    
);
};

export default Header;