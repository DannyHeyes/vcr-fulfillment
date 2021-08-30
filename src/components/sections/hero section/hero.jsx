import React from 'react';

import { heroSection } from './hero.module.css';

export default function HeroSection() {
    return (
        <section className={heroSection}>
                <div>
                    <h1>
                        Premium coffee for your office
                    </h1>
                    <p>
                        Our virtual roastery serves your daily dose of caffeine directly to the office. Coffee that is sustainable, transparent and traceable all wrapped up in a custom package design with employer branding. 
                    </p>
                </div>

               <a href="mailto:hello@vcrfulfillment.com">
                    Request a quote
               </a>
            </section>
    );
}