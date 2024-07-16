import React from 'react';

import './home_page.css'

const HomePage: React.FC = () => {
    return (
        <div className='home-page-wrapper'>
            <div className='sidebar-section'></div>
            <div className='main-section'>
                <div className='appbar-section'></div>
                <div className='content-sections'>
                    <div className='section1'></div>
                    <div className='section2'></div>
                    <div className='section3'></div>
                    <div className='section4'></div>
                    <div className='section5'></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;