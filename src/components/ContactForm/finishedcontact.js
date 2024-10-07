import React, { useState, useRef } from 'react';
import axios from 'axios'; // Import Axios

const ContactDone = ( {setSubmitted} ) => {  

    const serviceID = "service_73i4vpj";
    const templateID = "template_xq22bsl";
    const publicKey = "i8VqL5uv1mKGUjOz4";
    const postEndpoint = "https://api.emailjs.com/api/v1.0/email/send";

    const form = useRef();

    const handleReset = (event) => {
        event.preventDefault();

        setSubmitted(false); 
      }

    return (
        <div className="bookingText" onClick={handleReset}> Thanks lol </div>
    );
};
 
export default ContactDone;