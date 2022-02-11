import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const Navigation = () => (
    <nav className='hamburger-menu'>
      <a href='#banner' ><img src='assets/images/punk-logo.png' alt='punk-logo' className='logo' style={{ width: '10%' }} /></a>
      <ul>
        <li><a href="#story" >Story</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#tokens">Tokenomics</a></li>
        <li><a href="#character">Characteristics </a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#">Mint</a></li>
        {/* <li>
          <Link to="/mint">mint</Link>
        </li> */}
        {/* <div className="header-social">
          <a href='https://discord.com/invite/sDXJeafg' target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
          <a href='https://twitter.com/TheHexagonOrg/' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
        </div> */}
      </ul>
    </nav>
  );

  return (
    <header>
      <div className="menu-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} color='#fff' />
      </div>
      <div className="menu_desk">
        <a href='#banner'><img src='assets/images/punk-logo.png' alt='punk-logo' style={{ width: '50%' }} /></a>
        <ul >
          <li><a href="#story">Story</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#tokens">Tokenomics</a></li>
          <li><a href="#Characteristics ">Characteristics</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#">Mint</a></li>
          {/* <li>
            <Link to="/mint">mint</Link>
          </li> */}
          {/* <div className="header-social">
            <a href='https://discord.com/invite/sDXJeafg' target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
            <a href='https://twitter.com/TheHexagonOrg/' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          </div> */}
        </ul>
      </div>
      {isOpen && <Navigation />}
    </header>
  )
}

export default Header
