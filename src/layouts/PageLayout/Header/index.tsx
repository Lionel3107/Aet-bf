import React from 'react';
import {HeaderProps} from "../../../types";
import './style.css';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa6";
import {medium, small} from "../../../styles/icons";
import aetLogo from '../../../assets/images/Logo-aet.png';
import Image from "../../../components/Image";
import {FaShoppingBag} from "react-icons/fa";
import SvgIcon from "../../../components/SvgIcon";
import {ReactComponent as SvgBurgerMenu} from "../../../assets/svg/BurgerMenu.svg";
import HorizontalNavBar from "../../../components/HorizontalNavBar";
import SpinningImage from "../../../components/SpinningImage";
import BurgerSidebar from "../../../components/BurgerSidebar";


const Header: React.FC<HeaderProps> = ({ title="Default title" }) => {
    const menuItems = [
        { title: 'Acceuil', url: '/' },
        { title: 'Vie des AET', url: '/life' },
        { title: 'Publication', url: '/posts' },
        { title: 'Organisation', url: '/organisation' },
        { title: 'Clubs', url: '/clubs' },
        { title: 'A props', url: '/about' },
    ];
  return (
      <header>
          <div className="top-bar">
              <div className="top-bar-box social-icons">
                  <a href="https://www.facebook.com">
                      <FaFacebookF style={small}/>
                  </a>
                  <a href="https://www.instagram.com">
                      <FaInstagram style={small}/>
                  </a>
                  <a href="https://twitter.com">
                      <FaTwitter style={small}/>
                  </a>
                  <a href="https://linkedin.com">
                      <FaLinkedinIn style={small}/>
                  </a>
                  <a href="contacter" className="nous-contacter">
                      <b style={{margin:"0 1em"}}>|</b>Nous contacter</a>
              </div>
              <div className="top-bar-box logo-container">
              <SpinningImage>
                      <Image src={aetLogo} alt={"Logo aet"} style={{width: "30px", height: "30px"}}/>
                  </SpinningImage>
              </div>
              <div className="top-bar-box cart-menu">
                  <div className='inscription'>
                          <a href="" className=''>Se connecter
                              <i className="class"></i>
                          </a>
                  </div>
                  <div className="cart">
                      <a href="https://www.ebay.com">
                          <FaShoppingBag style={medium}/> Boutique
                      </a>
                  </div>
                 
                  <div className="cart-menu-burger-menu">
                      <BurgerSidebar menuItems={menuItems} >
                            <SvgIcon icon={SvgBurgerMenu} width={small.fontSize} height={small.fontSize}/>
                      </BurgerSidebar>
                  </div>
                
              </div>
          </div>
          <div className="nav-bar-lg">
            <HorizontalNavBar menuItems={menuItems}/>
          </div>
      </header>
  );
};


export default Header;
