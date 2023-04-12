import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/Navbar/NavBar';
import Intro from '../components/Intro';
import People from '../components/People';
import OurTeam from '../components/our-team';


const Us = () => {
    return (
        <>
            <NavBar />
            <Intro />
            <OurTeam/>
            {/* <Services /> */}
            {/* <People /> */}
            <Footer />
        </>

    )
}

export default Us;