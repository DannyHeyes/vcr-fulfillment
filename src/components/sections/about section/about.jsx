import React from 'react';

import { aboutUs, aboutUsContent, designStudio, designImg, designQuote, virtualRoastery } from './about.module.css';

export default function AboutSection() {
    return (
        <section id="whatWeDo" className={aboutUs}>
        <h2>
            what we do
        </h2>
        <div className={aboutUsContent}>
            <div className={designStudio}>
                <h5>
                    design studio
                </h5>
                <p>
                    In accordance to your corporate branding, our in-house design studio is keen to deliver a complete retail product for 'home office' consumption. <br />
                    We are also commit to providing a sustainable solution to reduce packaging waste in your offices. 
                </p>
            </div>
            <div className={designImg}></div>
            <div className={designQuote}>
                <p>
                    you choose we provide together <br /> we celebrate life
                </p>
            </div>
            <div className={virtualRoastery}>
                <h5>
                    Virtual Roastery
                </h5>
                <p>
                    We believe in the foreshadowing impact that first cup of coffee has on your day. Our shared goal is to provide that feeling, working towards a sustainable future that is bright, sweet and exciting. <br />
                    To focus on this interaction, we have set up a virtual roastery. This enables us to opt for a truly fair trade and sustainable future in coffee production, hence our decision to say no to cool, catchy marketing slogans while being your invisible companion. 
                </p>
            </div>
         </div>               
    </section>
    );
}