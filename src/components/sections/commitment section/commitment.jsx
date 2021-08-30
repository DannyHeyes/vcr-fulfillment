import React from 'react';

import CommitmentCards from '../../common/cards/cards';

import { commitmentSection, commitmentCardWrapper, cardOne, cardTwo, cardThree } from './commitment.module.css';

export default function CommitmentSection() {
    return (
        <section className={commitmentSection}>
        <h2>
            commitments
        </h2>
        <p>
            Customise your order based on the size and the thirst of your office with our three commitment plans! 
        </p>
        <div className={commitmentCardWrapper}>
            <div className={cardOne}>
                <CommitmentCards >
                    <h4>
                        basic
                    </h4>
                    <p>
                        Delivering and curating a produict experience for recruitmnet initiatives and inhouse marking on an event basis
                    </p>
                </CommitmentCards>
            </div>

            <div className={cardTwo}>
                <CommitmentCards>
                    <h4>
                        plus
                    </h4>
                    <p>
                        Delivering a finished customised product for office consumption in buckets on a subscription basis
                    </p>
                </CommitmentCards>
            </div>

            <div className={cardThree}>
                <CommitmentCards>
                    <h4>
                        pro
                    </h4>
                    <p>
                        Providing and curating a product experience for home office consumption in retail packaging on a subscription basis 
                    </p>
                </CommitmentCards>
            </div>
        </div>
    </section>
    );
}