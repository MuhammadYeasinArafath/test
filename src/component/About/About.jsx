import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



import "./About.css";
const About = () => {
    return (
        <>
 <Navbar></Navbar>  
<div className="About">

<h1>About Us</h1>   
        <p id='pp'>Demo Real Estates is a well-knowned real estate company serving in dubai. It is located in Dubai. You can buy, sell, rent your property through our website.</p> 
      
        <p id="daz"><h3 id="qq">Property Buying:</h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, est rerum! Voluptatibus inventore id doloribus atque, voluptate unde hic, itaque voluptates incidunt ullam nulla voluptatum quod provident. Cupiditate, possimus neque.</p>
     
        <p id="daz"><h3 id="qq">Property Selling:</h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit. In et commodi deserunt natus ipsam, suscipit labore placeat sequi impedit dicta recusandae dolorum nemo vero obcaecati aliquid reiciendis illo enim quia.</p>
      
        <p id="daz"><h3 id="qq">Property Renting:</h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, neque at, saepe optio totam omnis fugiat suscipit dolorum voluptate amet, quam eligendi dignissimos quae. Sint illum corporis quos in blanditiis.</p>
        
        <p id="daz"><h3 id="qq">Office Location:</h3> Street:  P.O Box 16968
                                              <br />
                                              City:   Dubai
                                              <br />
                                              State/province/area:    Dubai
                                              <br />
                                              Phone number:  971-7220948
                                              <br />
                                              Zip code:  16968
                                              <br />
                                              Country calling code:  +971
                                              <br />
                                              Country:  Emirates 
                                              </p>  




</div>
<Footer></Footer>
        </>
    );
};

export default About;