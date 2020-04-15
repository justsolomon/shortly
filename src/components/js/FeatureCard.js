import React from 'react';
import '../css/FeatureCard.css';

const FeatureCard = (props) => {
    return (
        <div className={props.class}>
            <div className='card-icon'>
                <img src={props.image} alt='brand-icon' />
            </div>
            <div className='card-content'>
                {props.children}
            </div>
        </div>
    )
}

export default FeatureCard;