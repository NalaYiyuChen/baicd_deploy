import React from "react";
import mobile_background from '../../images/mobile_background.png'

const AboutMobile = () => {

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
            <h1 style={style.headingStyles}> <br/><br/> About </h1>
            <div style={style.textStyles}>
            Bay Area Independent Chinese Dancers is a collective of independent Chinese dancers, choreographers, and allied artists who use traditional arts to tell new Bay Area and global stories in our own voices. <br /><br />

            While we were created to provide a gender-inclusive home for 22-50 year-old Chinese dancers, we are open to anyone who shares our passion for creating new work in traditional arts and original interpretations of derived pieces, regardless of age, national origin, gender, or other dance team/studio affiliations. <br /><br />


            Our goal is not to replicate the traditional studio model, but to focus on original choreographies and solos that better fit with working adults’ schedules while democratizing individual dancers’ artistic voice. We hope to connect traditional audiences with local issues, and use our public engagement to introduce new communities to the diversity of Chinese dance. <br /><br />

            VIDEOS
            For performance videos, visit our Youtube channel
            </div>
        </div>
    );
};
 
export default AboutMobile;