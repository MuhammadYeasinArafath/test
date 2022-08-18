import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



import "./Home.css";
const Home = () => {
    return (
        <>
<Navbar></Navbar>

<div className="Home">
<h1>Welcome to our Application.</h1>
<h4>this application has 4 page.</h4>
</div>

<Footer></Footer>
        </>
    );
};

export default Home;