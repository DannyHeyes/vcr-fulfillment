import React from 'react';

import { nav, logo, links } from './navbar.module.css'; 

const Navbar = () => {
    return ( 
        <nav className={nav}>
            <div className={logo}>
                <h1>
                    vcr fulfillment
                </h1>
            </div>
            <div className={links}>
                <ul>
                    <li>
                        <a href="#whatWeDo">
                            What we do
                        </a>
                    </li>
                    <li>
                        <a href="#purpose">
                            Our purpose
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;