import React from "react";
import mobile_background from '../../images/mobile_background.png'

const ContactMobile = () => {

    const style = {
        backgroundStyles: {
            backgroundImage:`url("${mobile_background}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        },
        headingStyles: {
            textAlign: 'center',
            color: 'white',
        },
        textStyles: {
            textAlign: 'justify',
            marginLeft: '8%',
            marginRight: '8%',
            color: 'white',
          }
       
    };

      return (

        <div style={style.backgroundStyles}>
            <h1 style={style.headingStyles}> <br/><br/> Contact Us </h1>
            <div style={style.textStyles}>
            Please fill out our form below to book us for public or private performances or panels, collaborations, business proposals, press inquiries, &c. We love being a part of the community, and we look forward from hearing from you! You can also use this form to sign up for our mailing list!
            </div>
        </div>
    );
};
 
export default ContactMobile;