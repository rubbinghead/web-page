import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import Intro from '../components/Intro';
import Services from '../components/Services';


const Service = () => {
    return (
        <>
            <NavBar />
            <Intro />
            <Services />
            {/* <People /> */}
            <Footer />
        </>

    )
}

export default Service;