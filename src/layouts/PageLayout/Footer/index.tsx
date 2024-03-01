import React from 'react';
import {FooterProps} from "../../../types";
import './style.css';


const Footer: React.FC<FooterProps> = ({ copyright="Default copyright" }) => {
    return (
        <footer>
            <p>&copy; {copyright}</p>
        </footer>
    );
};



export default Footer;
