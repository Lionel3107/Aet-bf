import React from 'react';
import {ImageProps} from "../../types";



const Image: React.FC<ImageProps> = ({ src, alt, style }) => {
    // Check if src is a string (image URL) or a module (imported image)
    const isUrl = typeof src === 'string';

    // Define the image source based on whether it's a URL or imported module
    const imageUrl = isUrl ? src : src.default;

    return (
        <img
            src={imageUrl}
            alt={alt}
            style={style}
        />
    );
};

export default Image;
