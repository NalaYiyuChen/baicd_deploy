import React from "react";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png'; // with import

const About = () => {
    const styles = {
        aboutText: {
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "justify",

        },
        inputText: {
          padding: "10px",
          color: "red",
        },
        banner:{
            marginLeft: "15%",
            marginRight: "15%",

        }
      };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
        
            <div className="bannerDumb" style={styles.banner}>
                <img alt="banner" src={BAICD_BannerImage}></img>
            </div>

            <h1>
                <div className="pageTitles">
                        ABOUT
                </div>
            </h1>

            <div className="aboutText defaultFontXLarge" style={styles.aboutText}>
            BAICD is a collective of independent Chinese dancers, choreographers, 
            and allied artists who use traditional arts to tell new Bay Area and 
            global stories in our own voices. While we were created to provide a 
            gender-inclusive home for 22-50 year-old Chinese dancers, we are open 
            to anyone who shares our passion for creating new work in traditional 
            arts and original interpretations of derived pieces, regardless of age, 
            national origin, gender, or other dance team/studio affiliations. Our 
            goal is not to replicate the traditional studio model, but to focus on 
            original choreographies and solos that better fit with working adults' 
            schedules while democratizing individual dancers' artistic voice. We hope 
            to connect traditional audiences with local issues, and use our public 
            engagement to introduce new communities to the diversity of Chinese dance. 
            </div>
        </div>
    );
};
 
export default About;