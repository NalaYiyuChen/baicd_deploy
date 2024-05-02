import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png';
import React, { useState, useRef } from 'react';
import axios from 'axios'; // Import Axios

const Contact = () => {
    const serviceID = "service_73i4vpj";
    const templateID = "template_xq22bsl";
    const publicKey = "i8VqL5uv1mKGUjOz4";
    const postEndpoint = "https://api.emailjs.com/api/v1.0/email/send";

    const form = useRef();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [inquiry, setInquiry] = useState("");
    const [message, setMessage] = useState("");
    const [maillingList, setMailingList] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}`);
        console.log(`The phone you entered was: ${phone}`);
        console.log(`The email you entered was: ${email}`);
        console.log(`The inquiry you entered was: ${inquiry}`);
        console.log(`The message you entered was: ${message}`);
        console.log(`Mailing list: ${maillingList}`);

        // code fragment
        var data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
                'from_name': name,
                'phone': phone,
                'email': email,
                'inquiry_type': inquiry,
                'mailing_list': maillingList,
                'message': message
            }
        };

        sendEmail(data);
      }

      const sendEmail = (data) => {
        axios.post(postEndpoint, data)
        
      };

      const checkHandler = () => {
        setMailingList(!maillingList)
      }
    
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
            <div className="bookingText">
                <p className="booking-disclaimer">
                Please fill out our form below to book us for public or private performances or panels, collaborations, business proposals, press inquiries, &c. We love being a part of the community, and we look forward from hearing from you! You can also use this form to sign up for our mailing list! 
                </p>
                <div className="booking-form">
                <form ref={form} id="contactForm" onSubmit={handleSubmit}>
                    <div className="leftColContact">
                        <div className="form-padding">
                            <label for="name">Name</label><br></br>
                            <input type="text" placeholder="Stefan G. Cheng" id="name" name="name" onChange={(e) => setName(e.target.value)}/><br></br>
                        </div>
                        <div className="form-padding">
                            <label for="email">Email address</label><br></br>
                            <input type="text" placeholder="info@gmail" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/><br></br>
                        </div>
                    </div>

                    <div className="rightColContact">
                    <div className="form-padding">
                        <label for="phoneNum">Phone number</label><br></br>
                        <input type="text" placeholder="415-510-6500" id="phoneNum" name="phoneNum" onChange={(e) => setPhone(e.target.value)}/><br></br>
                    </div>

                    <div className="form-padding" include="form-input-select()">
                            <label for="inquiryChoice">Inquiry type</label><br></br>
                            {/* <input className="dropDown" placeholder="Select one" list="inquiry-choice" id="inquiryChoice" name="inquiryChoice" onChange={(e) => setInquiry(e.target.value)}/> */}
                        <select className="dropDown-content dropDown" id="inquiry-choice"  onChange={(e) => setInquiry(e.target.value)}>
                            <option selected="true" value="" disabled="disabled">Select One</option>

                            <option value="Book">Book</option>
                            <option value="General">General</option>
                            <option value="Get in Contact">Get in Contact</option>
                            <option value="Customer Support">Customer Support</option>
                            <option value="Buy Tickets">Buy Tickets</option>
                        </select>
                        <br></br>
                        </div>
                    </div>

                    <div className="bottomContact">

                    <div className="form-padding">
                        <div className="messagesBox">
                            <label for="messages">Messages</label><br></br>
                            <input className="form-padding messageLabel" placeholder="Type your message here" type="text" id="messages" name="messages" onChange={(e) => setMessage(e.target.value)} /><br></br>
                        </div>
                    </div>
                    <div className="signUpBox">
                        <input type="checkbox" id="sign-up" name="sign-up" onChange={checkHandler}/>
                        <label for="sign-up">Sign up for our mailing list</label><br></br>

                        {/* <input className="submitButton" type="submit" id="submitButton" name="submitButton" /> */}
                        <button  className="submitButton" id="submitButton" name="submitButton" type="submit">Submit</button>
                        <br></br>
                    </div>
                
                    </div>
                </form>
                <div className="bottomIcons">
                    {/* still gotta do this */}
                </div>
                </div>
                <br></br>
                <p className="booking-disclaimer">Photography by Zoe Moore, Isabelle Hodge, Nathaniel Goh, and others and logo designs by Tiffany Lin Art <a className="allLinks" href="https://www.instagram.com/tiffanyyilinart/" target="blank">(https://www.instagram.com/tiffanyyilinart/)</a>. Bay Area Independent Chinese Dancers is a fiscally sponsored project of Shawl Anderson Dance Center. Website design by Shawn Lee, @studiocreator and @hopdesignstudio on Canva and implemented by Joy Hwang, William Chen, and Nala Chen. All rights reserved.</p>
            </div>
        </div>
    );
};
 
export default Contact;