import React, { useState } from 'react';
import {BurgerMenuProps} from "../../types";
import './style.css';
const BurgerMenu :React.FC<BurgerMenuProps>= ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            {
                !isOpen && <div className="burger-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            }


            {
                isOpen &&   <div className="menu sidebar-modal">
                    <button onClick={toggleMenu}>Close</button>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default BurgerMenu;
