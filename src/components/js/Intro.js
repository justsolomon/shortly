import React from 'react';
import '../css/Intro.css';
import AuthButton from './AuthButton.js';
import ImgWorking from '../../assets/illustration-working.svg';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='description'>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <AuthButton />
            </div>

            <div className='illustration'>
                <img src={ImgWorking} alt='illustration of a person working' />
            </div>
        </div>
    )
}

export default Intro;