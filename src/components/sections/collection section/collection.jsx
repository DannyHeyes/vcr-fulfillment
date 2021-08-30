import React from 'react';
import { CollectionCards } from '../../common/cards/cards';

import { collectionsSection, collectionCardWrapper } from './collection.module.css';

const coffeeBag = require('../../../assets/coffee-bag.png').default;

const collections = [
    {
        line: "Choco & Nuts",
        info: "Roasted beans that have strong nut and chocolate aromas targeting the consumer who are looking for more conventional taste and product."
    },
    {
        line: "Fruits & Flowers",
        info: "Roasted beans that have a strong fruity and floral aromas targeting the consumers who are looking for a more exceptional product."
    },
    {
        line: "Game Changer",
        info: "Roasted beans that have an exceptionally low carbon footprint, targeting the consumer who are looking to make a political statement with their choice."
    }
]

export default function CollectionSection() {
    return (
        <section className={collectionsSection}>
                <h2>
                    collections
                </h2>
                <div className={collectionCardWrapper}>

                {collections.map(collection => (
                    <CollectionCards>
                        <div>
                            <img src={coffeeBag} alt="" />
                        </div>
                        <div>
                            <h5>
                                {collection.line}
                            </h5>
                            <p>
                                {collection.info}
                            </p>
                        </div>
                    </CollectionCards>
                ))}
                </div>
            </section>
    );
}