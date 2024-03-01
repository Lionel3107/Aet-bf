import React from 'react';
import {SimpleCardProps} from '../../types';
import Image from "../Image";
import './style.css';
// Import your Image component here

function truncateText(text:string, maxLength:number) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength); // Truncate text and add ellipsis
    }
    return text; // Text is within the limit
}
const SimpleCard: React.FC<SimpleCardProps> = ({ image, text ,className }) => {
    // Truncate the text to two lines with an ellipsis if it exceeds two lines
    const truncatedText = truncateText(text,256);

    return (
        <div className={`card-container ${className}`}>
            <div className="card-image">
                <Image {...image} />
            </div>
            <div className="card-text">
                <p>{truncatedText}</p>
            </div>
        </div>
    );
};

export default SimpleCard;
