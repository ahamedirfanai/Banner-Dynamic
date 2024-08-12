// Banner-dynamic/frontend/src/components/Banner.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Banner = ({ showBanner, duration, description, link }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (showBanner) {
            setTimeLeft(duration);
            const timerId = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 1) {
                        clearInterval(timerId);
                        return 0;
                    }
                    return prevTimeLeft - 1;
                });
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [showBanner, duration]);

    if (!showBanner || timeLeft <= 0) {
        return null;
    }

    return (
        <div className="banner">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <h1>{description}</h1>
            </a>
            <p>Disappearing in {timeLeft} seconds...</p>
        </div>
    );
};

Banner.propTypes = {
    showBanner: PropTypes.bool.isRequired,
    duration: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Banner;
