import React, { useState } from 'react';
import './bulb.css'; // Ensure you import the CSS

// Import images
import bulbOn from './assets/on.jpg';
import bulbOff from './assets/off.jpg';

const BulbToggle = () => {
    const [isBulbOn, setIsBulbOn] = useState(false);

    const handleToggle = () => {
        setIsBulbOn(!isBulbOn);
    };

    return (
        <div className="bulb-container">
            <img
                src={isBulbOn ? bulbOn : bulbOff}
                alt="Bulb"
                className="bulb-image"
            />
            <button onClick={handleToggle}>
                {isBulbOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
};

export default BulbToggle;
