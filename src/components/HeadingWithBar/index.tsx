import React, {useEffect} from "react";
import {HeadingWithBarProps} from "../../types";
import './style.css';

const HeadingWithBar:React.FC<HeadingWithBarProps>= ({ children,className, titleStyle,barColor = "black"})=>{
    // Calculate the width for the bar based on the length of the text
    useEffect(() => {
        document.documentElement.style.setProperty('--bar-color', barColor); // Change the bar color to blu
    }, [barColor]);
    return (
        <div className="title-container-HeadingWithBar">
            <h4 className="title-HeadingWithBar" style={titleStyle}>
                {children}
            </h4>
        </div>
    );
}

export default HeadingWithBar;
