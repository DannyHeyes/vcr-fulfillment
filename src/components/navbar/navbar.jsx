import React, { useState } from 'react';
import { Link } from 'react-scroll';

import Menu from '../../assets/icon-hamburger.svg';
import Close from '../../assets/icon-close.svg'

import { nav, logo, burgerDiv,  navLinksOpen, navLinksClosed } from './navbar.module.css'; 

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!isOpen);
    }

    const closeMobileMenu = () => setOpen(false)

    return ( 
        <nav className={nav}>
            <div className={logo}>
                <h1>
                    vcr fulfillment
                </h1>
            </div>

            <div className={isOpen ? navLinksOpen : navLinksClosed}>
                <ul>
                    <li>
                        <Link onClick={closeMobileMenu} to="whatWeDo" spy={true} smooth={true} duration={2000} >
                            what we do
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} to="purpose" spy={true} smooth={true} duration={2000}>
                            our purpose
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div className={burgerDiv}>
                <img id="burger-icon" onClick={handleNav} src={isOpen ? Close : Menu} alt="" />
            </div>
        </nav>
     );
}
 
export default Navbar;


