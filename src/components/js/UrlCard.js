import React from 'react';
import '../css/UrlCard.css';

class UrlCard extends React.Component {
    
    constructor() {
        super();
        this.state = {
            copySuccess: '',
            buttonText: 'Copy',
            buttonClass: 'copy-button'
        }
    }
    
    copyUrl = () => {
        const text = this.props.shortUrl;
    
        //create textarea to hold text to be copied
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        //execute copy command and remove textarea
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        //setstate for copied element
        this.setState({ 
            copySuccess: true,
            buttonText: 'Copied!',
            buttonClass: `${this.state.buttonClass} copy-button-success`
        })
    }

    render() {
        const { mainUrl, shortUrl } = this.props;
        return (
            <div className='url-card slidein'>
                <p className='main-url'>{mainUrl}</p>
                <span></span>
                <div className='short-url-div'>
                    <a className='short-url' href={shortUrl} target='_blank' rel="noopener noreferrer">{shortUrl}</a>
                    <button className={this.state.buttonClass} onClick={this.copyUrl}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default UrlCard;