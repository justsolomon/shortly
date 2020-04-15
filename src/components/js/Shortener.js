import React from 'react';
import '../css/Shortener.css';
import UrlCardList from './UrlCardList.js';

const Shortener = ({ getInput, renderUrl, urlCards, errorIds }) => {
    return (
        <div className='input-container'>
            <div className='input-container-inner'>
                <form className='shortener-form'>
                    <label htmlFor='link'>
                        <input onChange={getInput} className='input-url' id={errorIds[0]} placeholder='Shorten a link here...' />
                        <span className='no-link' id={errorIds[1]}>Please add a link</span>
                        <span className='invalid-url' id={errorIds[2]}>Please enter a valid link</span>
                    </label>
                    <label htmlFor='submit'>
                        <button className='submit-button' onClick={renderUrl}>Shorten it!</button>
                    </label>
                </form>
            </div>
            <UrlCardList urlCards={urlCards}/>
        </div>
    )
}

export default Shortener;