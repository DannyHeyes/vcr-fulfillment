import React from 'react';
import CommitmentCards, { CollectionCards, PurposeCards } from '../common/cards/cards';

import { heroSection, commitmentSection, commitmentCardWrapper, cardOne, cardTwo, cardThree, collections, collectionCardWrapper, aboutUs, aboutUsContent, designStudio, designImg, designQuote, virtualRoastery, ourPurpose, purposeCardWrapper } from './home.module.css';

const coffeeBag = require('../../assets/coffee-bag.png').default;

const Home = () => {
    return ( 
        <>
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

            <section className={collections}>
                <h2>
                    collections
                </h2>
                <div className={collectionCardWrapper}>
                    <CollectionCards>
                        <div>
                            <img src={coffeeBag} alt="" />
                        </div>
                        <div>
                            <h5>
                                Choco & Nuts
                            </h5>
                            <p>
                                Roasted beans that have strong nut and chocolate aromas targeting the consumer who are looking for more conventional taste and product. 
                            </p>
                        </div>
                    </CollectionCards>
                    <CollectionCards>
                        <div>
                            <h5>
                                Fruits & Flowers 
                            </h5>
                            <p>
                                Roasted beans that have a strong fruity and floral aromas targeting the consumers who are looking for a more exceptional product. 
                            </p>
                        </div>
                        <div>
                            <img src={coffeeBag} alt="" />
                        </div>
                    </CollectionCards>
                    <CollectionCards>
                        <div>
                            <img src={coffeeBag} alt="" />
                        </div>
                        <div>
                            <h5>
                                Game Changer
                            </h5>
                            <p>
                                Roasted beans that have an exceptionally low carbon footprint, targeting the consumer who are looking to make a political statement with their choice. 
                            </p>
                        </div>
                    </CollectionCards>
                </div>
            </section>

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

            <section id="purpose" className={ourPurpose}>
                <h2>
                    our purpose
                </h2>
                <p>
                    We are sourcing raw material through our coffee specific network, deliberately collaborating with green coffee buyers that share our DNA.
                </p>
                <div className={purposeCardWrapper}>
                    <PurposeCards>
                        <h5>
                            direct trading
                        </h5>
                        <p>
                            Buying spot coffees from warehouse in Bremen, Hamburg or Antwerpen. 
                        </p>
                    </PurposeCards>
                    <PurposeCards>
                        <h5>
                            relationship trade
                        </h5>
                        <p>
                            Buying coffee directly from a producer/exporter at origin, utilising green coffee buyers as logistics partners. 
                        </p>
                    </PurposeCards>
                    <PurposeCards>
                        <h5>
                            VCR trading
                        </h5>
                        <p>
                            We function as intermediary curator connecting producer-consumer journey by enabling investments into particular projects. 
                        </p>
                    </PurposeCards>
                </div>
            </section>

        </>
     );
}
 
export default Home;