import React from 'react';
import LandingPage from './LandingPage.js';
import Shortener from '../../components/js/Shortener.js';
import FeaturesPage from './FeaturesPage.js';
import AuthDiv from './AuthDiv.js';
import Footer from '../../components/js/Footer.js';

class App extends React.Component {

  constructor() {
    super();                                                                                                                                                                                  
    this.state = {
      inputUrl: '',
      urlCards: [],
      errorIds: []                                                                                                                                                                                      
    }
  }

  onInputChange = (e) => {
    this.setState({ 
      inputUrl: e.target.value, 
      errorIds: []
    })
  }

  validateUrl(url) {
    const urlRegexp = new RegExp(/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/?|(\/[\w.?#$%&=-]+\/?)*)$/);
    return urlRegexp.test(url);
  }

  checkUrlProtocol(url) {
    const protocolRegexp = new RegExp(/^https?:\/\//);
    return protocolRegexp.test(url);
  }

  shortenUrl = (input) => {
    return fetch('https://rel.ink/api/links/', {
              method: 'POST',
              body: JSON.stringify({
                url: input
              }),
              headers: {
                "Content-type": "application/json" 
              }
            })
              .then(res => res.json())
              .catch(err => console.log(err))
  }
  
  saveToStorage = (mainUrl, shortUrl) => {
    if (localStorage['links'] === undefined) {
      const linksArray = [
        {
          mainUrl: mainUrl,
          shortUrl: shortUrl
        }
      ];

      localStorage['links'] = JSON.stringify(linksArray);
    } else {
        const linksArray = JSON.parse(localStorage['links']);
        linksArray.push({
          mainUrl,
          shortUrl
        })
        localStorage['links'] = JSON.stringify(linksArray);
    }
  }

  componentDidMount() {
    if (localStorage['links'] !== undefined) {
      this.setState({ urlCards: JSON.parse(localStorage['links']) });
    }
  }

  addUrlCard = (urlCard) => {
    this.setState({ urlCards: [...this.state.urlCards, urlCard] });
  }

  updateErrorId = (errors) => {
    this.setState({
      errorIds: errors
    });
  }

  render(){

    let { inputUrl } = this.state;
    inputUrl = inputUrl.toLowerCase();
    const { shortenUrl, saveToStorage, addUrlCard, validateUrl, checkUrlProtocol, updateErrorId} = this;
    
    async function renderShortUrl(e) {
      e.preventDefault();

      if (validateUrl(inputUrl)) {
        if (!checkUrlProtocol(inputUrl)) inputUrl = `https://${inputUrl}`;
        
        const data = await shortenUrl(inputUrl);
        const shortUrl = `https://rel.ink/${data.hashid}`;
        
        saveToStorage(inputUrl, shortUrl);
        
        addUrlCard({
          mainUrl: inputUrl,
          shortUrl
        })

        //clear any previous error class
        updateErrorId(['', '', '']);
      } 
      else if (inputUrl === '') {
        updateErrorId(['error', 'no-link', '']);
      } 
      else {
        updateErrorId(['error', '', 'invalid-url']);
      }
    }

    return (
      <div className="App">
        <LandingPage />                                         
        <Shortener getInput={this.onInputChange} renderUrl={renderShortUrl} urlCards={this.state.urlCards} errorIds={this.state.errorIds} />
        <FeaturesPage />
        <AuthDiv />
        <Footer />
      </div>
    );
  }
}

export default App;
