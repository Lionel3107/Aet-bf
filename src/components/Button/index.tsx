import React from 'react';
import {ButtonProps} from "../../types";



const Button: React.FC<ButtonProps> = ({ className = '', onClick, children, style }) => {
    // Default button styles for width and height (you can adjust these values)
    const defaultStyles: React.CSSProperties = {
        width: '120px', // Default width
        height: '40px', // Default height
        borderRadius: '20px', // Default border-radius for rounded shape
        backgroundColor: '#007bff', // Default background color
        color: '#fff', // Default text color
        border: 'none', // Remove default button border
        cursor: 'pointer', // Add pointer cursor on hover
    };

    const buttonStyles: React.CSSProperties = {
        ...defaultStyles, // Apply default styles
        ...style, // Apply any custom styles passed via props
    };

    return (
        <button className={`button ${className}`} style={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
