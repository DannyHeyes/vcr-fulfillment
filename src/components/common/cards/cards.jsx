import React from 'react';

import { commitmentCard, collectionCard, purposeCard } from './cards.module.css';

const CommitmentCards = (props) => {
    return ( 
        <div className={commitmentCard}>
            {props.children}
        </div>
     );
}
 
export default CommitmentCards;

export const CollectionCards = (props) => {
    return (
        <div className={collectionCard}>
            {props.children}
        </div>
    )
}

export const PurposeCards = (props) => {
    return (
        <div className={purposeCard}>
            {props.children}
        </div>
    )
}