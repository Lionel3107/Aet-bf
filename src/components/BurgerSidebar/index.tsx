import React, {useEffect, useRef, useState} from "react";

import {BurgerSideBarProps} from "../../types";

import './style.css';
import SpinningImage from "../SpinningImage";
import Image from "../Image";
import aetLogo from "../../assets/images/Logo-aet.png";
import {RxCross2} from "react-icons/rx";
import {FaTimes} from "react-icons/fa";

const BurgerSidebar: React.FC<BurgerSideBarProps> = ({menuItems, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const sidebarRef = useRef<HTMLDivElement | null>(null); // Set the type explicitly


    useEffect(() => {
        const closeSidebar = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                console.log("clik");
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", closeSidebar,true);

        return () => {
            document.removeEventListener("mousedown", closeSidebar,true);
        };
    }, [sidebarRef]);

    const toggleMenu = () => {
        console.log("toogle");
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="burger-toggle" onClick={toggleMenu} style={{cursor:"pointer"}}>
                {children || (
                    /* Display default button if no children provided */
                    <div className="burger-icon">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                )}
            </div>
            <div ref={sidebarRef} className={`burger-sidebar ${isOpen ? "open" : "closed"}`}>
                <div className="close-button" onClick={toggleMenu} style={{cursor:"pointer"}}>
                    {/* Close button (you can replace this with your custom icon) */}
                    {/*<button>&times;</button>*/}
                    <FaTimes />
                </div>
                <div className="blue-band">
                    <SpinningImage>
                        <Image src={aetLogo} alt={"Logo aet"} style={{width: "30px", height: "30px"}}/>
                    </SpinningImage>
                </div>
                <ul className="menu-item-list">
                    {menuItems.map((item, index) => (
                        <li key={index} className="menu-item">
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BurgerSidebar;
