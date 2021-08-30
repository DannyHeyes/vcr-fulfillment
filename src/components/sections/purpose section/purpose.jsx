import React from 'react';

import { PurposeCards } from '../../common/cards/cards';

import { ourPurpose, purposeCardWrapper } from './purpose.module.css';

const purposes = [
    {
        number: '01', 
        name: 'direct trade',
        info: 'Buying spot coffees from warehouse in Bremen, Hamburg or Antwerpen.'
    },
    {
        number: '02', 
        name: 'relationship trade',
        info: 'Buying coffee directly from a producer/exporter at origin, utilising green coffee buyers as logistics partners.'
    },
    {
        number: '03', 
        name: 'VCR trade',
        info: 'We function as intermediary curator connecting producer-consumer journey by enabling investments into particular projects. '
    },

]

export default function PurposeSection() {
    return (
        <section id="purpose" className={ourPurpose}>
                <h2>
                    our purpose
                </h2>
                <p>
                    We are sourcing raw material through our coffee specific network, deliberately collaborating with green coffee buyers that share our DNA.
                </p>
                <div className={purposeCardWrapper}>

                    {purposes.map(purpose => (
                        <PurposeCards>
                            <h3>
                                {purpose.number}
                            </h3>
                            <h5>
                                {purpose.name}
                            </h5>
                            <p>
                                {purpose.info}
                            </p>
                        </PurposeCards>
                    ))}
                    
                </div>
            </section>
    );
}