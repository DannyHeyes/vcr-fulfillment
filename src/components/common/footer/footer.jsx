import React from 'react';

import { footer, footerBreak } from './footer.module.css';

const Footer = () => {
    return ( 
        <footer className={footer}>
            <p>
                Copyright VCR Fulfillment 2021. <br className={footerBreak} />
                All Rights Reserved. 
            </p>
            <a href="mailto:hello@vcrfulfillment.com">
                hello@vcrfulfillment.com
            </a>
        </footer>
     );
}
 
export default Footer;