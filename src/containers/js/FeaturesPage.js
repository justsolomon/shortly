import React from 'react';
import FeatureCard from '../../components/js/FeatureCard.js';
import '../css/FeaturesPage.css';
import BrandLogo from '../../assets/icon-brand-recognition.svg';
import RecordLogo from '../../assets/icon-detailed-records.svg';
import CustomizableLogo from '../../assets/icon-fully-customizable.svg';

const FeaturesPage = () => {
    return (
        <div className='features-section'>
            <div className='features-section-inner'>               
                <div className='feature-title'>
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard. </p>
                </div>

                <div className='feature-cards'>
                    <FeatureCard image={BrandLogo} class={'card brand'}>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </FeatureCard>
                    <FeatureCard image={RecordLogo} class={'card record'}>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </FeatureCard>
                    <FeatureCard image={CustomizableLogo} class={'card customizable'}>
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </FeatureCard>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage;