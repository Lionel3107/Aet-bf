import React from 'react';
import {SvgIconProps} from "../../types";



const SvgIcon: React.FC<SvgIconProps> = ({ icon: IconComponent, width, height, className }) => {
    return (
        <IconComponent
            width={width}
            height={height}
            className={className}
        />
    );
};

export default SvgIcon;
