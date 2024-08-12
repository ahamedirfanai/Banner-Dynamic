// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Dashboard = ({ setBannerSettings }) => {
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(20);
    const [link, setLink] = useState('');
    const [showBanner, setShowBanner] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/api/banner')
            .then(response => {
                const data = response.data;
                setDescription(data.description || '');
                setDuration(data.duration || 20);
                setLink(data.link || '');
                setShowBanner(data.showBanner ?? true);
                setBannerSettings(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching banner data:', error);
                setError('Failed to fetch banner data.');
                setLoading(false);
            });
    }, [setBannerSettings]);

    const handleApplySettings = () => {
        if (!description || !link || duration <= 0) {
            setError('Please fill out all fields correctly.');
            return;
        }

        const updatedSettings = {
            description,
            duration,
            link,
            showBanner
        };

        axios.post('http://localhost:5000/api/banner', updatedSettings)
            .then(() => {
                setBannerSettings(updatedSettings);
                setError('');
            })
            .catch(error => {
                console.error('Error updating banner data:', error);
                setError('Failed to update banner data.');
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h2>Banner Controls</h2>
            {error && <p className="error">{error}</p>}
            <label>
                Banner On/Off:
                <input
                    type="checkbox"
                    checked={showBanner}
                    onChange={(e) => setShowBanner(e.target.checked)}
                />
            </label>
            <label>
                Banner Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                Banner Timer (seconds):
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                />
            </label>
            <label>
                Banner Link:
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </label>
            <button onClick={handleApplySettings}>Apply Settings</button>
        </div>
    );
};

Dashboard.propTypes = {
    setBannerSettings: PropTypes.func.isRequired,
};

export default Dashboard;
