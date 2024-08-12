// src/App.js
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [bannerSettings, setBannerSettings] = useState({
        showBanner: true,
        description: 'This is the Banner',
        duration: 20,
        link: '#'
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch initial settings if needed
        // For example, you can fetch settings from an API if it's available
        // For now, we're assuming default settings are enough
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="App">
            {error && <p className="error">{error}</p>}
            <Dashboard setBannerSettings={setBannerSettings} />
            <Banner
                showBanner={bannerSettings.showBanner}
                description={bannerSettings.description}
                duration={bannerSettings.duration}
                link={bannerSettings.link}
            />
        </div>
    );
}

export default App;
