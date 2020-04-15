import React from 'react';
import UrlCard from './UrlCard.js';

const UrlCardList = ({ urlCards }) => {
    return (
        <div style={{marginTop: '-4rem'}}>
            {
                urlCards.map((card, i) => {
                    return <UrlCard mainUrl={card.mainUrl} shortUrl={card.shortUrl} key={i} />
                }).reverse()
            }
        </div>
    ) 
}

export default UrlCardList;