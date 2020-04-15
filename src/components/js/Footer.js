import React from 'react';
import Facebook from '../../assets/icon-facebook.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Twitter from '../../assets/icon-twitter.svg';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <a className='app-name' href='#top'>Shortly</a>
                <div className='footer-section'>
                    <p>Features</p>
                    <a href='#top'>Link Shortening</a>
                    <a href='#top'>Branded Links</a>
                    <a href='#top'>Analytics</a>
                </div>
                <div className='footer-section'>
                    <p>Resources</p>
                    <a href='#top'>Blog</a>
                    <a href='#top'>Developers</a>
                    <a href='#top'>Support</a>
                </div>
                <div className='footer-section'>
                    <p>Company</p>
                    <a href='#top'>About</a>
                    <a href='#top'>Our Team</a>
                    <a href='#top'>Careers</a>
                    <a href='#top'>Contact</a>
                </div>
                <div className='social-media'>
                    <a href='https://web.facebook.com/gbolahan.balogun.5667'>
                        <img src={Facebook} alt='social media icon' />
                    </a>

                    <a href='https://twitter.com/gbsolomon1'>
                        <img src={Twitter} alt='social media icon' />
                    </a>

                    <a href='#top'>
                        <img src={Pinterest} alt='social media icon' />
                    </a>
                    
                    <a href='https://instagram.com/gbsolomon1'>
                        <img src={Instagram} alt='social media icon' />
                    </a>
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/solomon403">Solomon</a>.
            </div>
        </div>
    )
}

export default Footer;