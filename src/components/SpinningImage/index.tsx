import React, { useState, useEffect } from 'react';
import './style.css';
import {SpinningImageProps} from "../../types"; // Import the CSS file for styling



const SpinningImage: React.FC<SpinningImageProps> = ({
                                                         children,
                                                         spinDuration = 2,
                                                         pauseDuration=5
                                                     }) => {
    const [isSpinning, setIsSpinning] = useState(true);


    useEffect(() => {
            const toggleSpin = () => {
                // setIsSpinning((prevIsSpinning) => !prevIsSpinning);
                setIsSpinning(true);
                setTimeout(()=>{
                    setIsSpinning(false);
                },spinDuration*1000);
            };

            const interval = setInterval(toggleSpin, (spinDuration+pauseDuration)*1000); // Toggle class every 1 second

            return () => {
                clearInterval(interval);
            };
    }, [pauseDuration,spinDuration]);
    return (
        <div className="spinning-image-container">
            <div
                className={isSpinning ? 'spinning-image' : ''}
            >
                {children}
            </div>
        </div>
    );
};

export default SpinningImage;
