import React from 'react';
import AuthButton from '../../components/js/AuthButton.js';
import '../css/AuthDiv.css';

const AuthDiv = () => {
    return (
        <div className='auth-reminder'>
            <h2>Boost your links today</h2>
            <AuthButton />
        </div>
    )
}

export default AuthDiv;