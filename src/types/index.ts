import React from "react";

export type HeaderProps = {
    title?: string;
}
export type FooterProps = {
     copyright?: string;
}


export type MenuItem = {
    title: string;
    url: string;
};

export type HorizontalNavBarProps = {
    menuItems: MenuItem[];
};

export type BurgerMenuProps = {
    menuItems: MenuItem[];
}

export type BurgerSideBarProps={
    menuItems: MenuItem[];
    children: React.ReactNode; // Content of the button
}

export type ImageProps = {
    src: string | any; // Image URL or imported image module
    alt?: string; // Alt text for the image
    style?: React.CSSProperties; // Optional inline styles
};

export type SvgIconProps = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>; // Imported SVG icon as a component
    width?: number | string; // Optional width
    height?: number | string; // Optional height
    className?: string; // Optional class name for styling
};

export type ButtonProps = {
    className?: string; // Optional class name for additional styling
    onClick?: () => void; // Optional click handler
    children: React.ReactNode; // Content of the button
    style?: React.CSSProperties; // Optional style object to override default styles
};

export type HeadingWithBarProps = {
    titleStyle?: {
        fontSize: string; // Make fontSize property obligatory
    } & React.CSSProperties;    children: React.ReactNode;
    barColor?: string; // Optional bar color prop
    className?: string;
}

export type SimpleCardProps = {
    image: ImageProps; // Image props for the article's image
    text: string; // Text or content of the article
    className?:string;
}


export type SpinningImageProps = {
    spinDuration?: number;
    pauseDuration?:number;
    children: React.ReactNode; // Content of the button
};
