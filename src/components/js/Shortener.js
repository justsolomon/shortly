import React from 'react';
import '../css/Shortener.css';
import UrlCardList from './UrlCardList.js';
import LoaderIcon from '../../assets/loader.png'

const Shortener = ({ getInput, renderUrl, urlCards, errorIds, loading }) => {
    return (
        <div className='input-container'>
            <div className='input-container-inner'>
                <form className='shortener-form'>
                    <label htmlFor='link' style={{ position: 'relative' }}>
                        <input onChange={getInput} className={errorIds[0]} id='link' placeholder='Shorten a link here...' />
                        <span className='no-link' id={errorIds[1]}>Please add a link</span>
                        <span className='invalid-url' id={errorIds[2]}>Please enter a valid link</span>
                    </label>
                    <label htmlFor='submit'>
                        <button className='submit-button' onClick={renderUrl} id='submit'>
                            <div>
                            {
                                loading && <img src={LoaderIcon} alt="loader icon" className='loader-icon' />
                            }
                             Shorten it!
                             </div>
                        </button>
                    </label>
                </form>
            </div>
            <UrlCardList urlCards={urlCards}/>
        </div>
    )
}

export default Shortener;
