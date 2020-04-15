import React from 'react';
import '../css/Header.css';
import Logo from '../../assets/logo.svg';

class Header extends React.Component {
    displayNavbar = () => {
        document.querySelector('.hamburger').classList.toggle('change');
        document.querySelector('.hidden-menu-2').classList.toggle('slidein');
        document.querySelector('.hidden-menu-2').classList.toggle('unhide');
        document.querySelector('html').classList.toggle('prevent-scroll');
    }

    render() {
        return (
            <div className='header'>
                <div className='desktop-navbar'>
                    <div className='general'>    
                        <a className='app-name' href='#top'>
                            <img src={Logo} alt='app-logo' />
                        </a>
                        <a href='#top'>Features</a>
                        <a href='#top'>Pricing</a>
                        <a href='#top'>Resources</a>
                    </div>
                    <div className='authentication'>
                        <a href='#top'>Login</a>
                        <a className='signup' href='#top'>Sign Up</a>
                    </div>
                </div>
    
                <div className='mobile-navbar'>
                    <div className='hidden-menu'>
                        <div className='top-menu'>
                            <a className='app-name' href='#top'>
                                <img src={Logo} alt='app-logo' />
                            </a>
                            <div className='hamburger' onClick={this.displayNavbar}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                    </div>
    
                    <div className='hidden-menu-2'>
                        <div className='page-links'>
                            <a href='#top'>Features</a>
                            <a href='#top'>Pricing</a>
                            <a href='#top'>Resources</a>
                            <span></span>
                            <a href='#top'>Login</a>
                            <a className='signup' href='#top'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;