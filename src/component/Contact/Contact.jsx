import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Contact.css";
const Contact = () => {
    return (
        <>
<Navbar></Navbar>
        <div className="Contact">
        <h1>Contact Us</h1>
         <div className="container">
    <form>
        <label htmlFor='Name'>Full Name</label>
        <input type="text" id="Name" name="Name" placeholder="Your Name..."></input>
        <label htmlFor='E-mail'>E-mail</label>
        <input type="text" id="E-mail" name="E-mail" placeholder="Your E-mail..."></input>
        <label htmlFor='Phone Number'>Phone Number</label>
        <input type="number" id="Phone-Number" name="Phone Number" placeholder="Your Phone Number..."></input>
        <label htmlFor='Subject'>Your Inquiry</label>
        <textarea id="Inquiry" name="Inquiry" placeholder="Your Inquiry..."></textarea>


        <input type="submit" value="Submit"></input>


    </form>

</div> 
</div>  
<Footer></Footer>
        </>
    );
};

export default Contact;