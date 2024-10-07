import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png';
import React, { useState, useRef } from 'react';
import axios from 'axios'; // Import Axios
import ContactUs from "../components/ContactForm/contactform";
import ContactDone from "../components/ContactForm/finishedcontact";

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    
    const styles = {
        banner:{
            marginLeft: "15%",
            marginRight: "15%",

        },
      };
    return (
        
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // height: "100vh",
            }}
        >
             <div className="banner" style={styles.banner}>
                <img src={BAICD_BannerImage}></img>
            </div>

            <h1>
                <div className="pageTitles">
                CONTACT/BOOKING
                </div>
            </h1>


            {!submitted && <ContactUs setSubmitted={setSubmitted}/>}
            {submitted && <ContactDone setSubmitted={setSubmitted}/>}
        </div>
    );
};
 
export default Contact;