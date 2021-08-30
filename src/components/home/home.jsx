import React from 'react';

import HeroSection from '../sections/hero section/hero';
import CommitmentSection from '../sections/commitment section/commitment';
import CollectionSection from '../sections/collection section/collection';
import AboutSection from '../sections/about section/about';
import PurposeSection from '../sections/purpose section/purpose';


import './home.module.css';


const Home = () => {
    return ( 
        <>

        <HeroSection/>

        <CommitmentSection/>
            
        <CollectionSection/>

        <AboutSection/>

        <PurposeSection/>


        </>
     );
}
 
export default Home;