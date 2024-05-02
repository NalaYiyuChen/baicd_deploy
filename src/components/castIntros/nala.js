import React from "react";
// import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
import nalachen_photo from "../../images/castPhotos/nalachen_photo.png";


const Nala = () => {
    const styles = {
        castImage:{
            marginLeft: "15%",
            marginRight: "15%",
            display: "flex",
            flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
            

        }
      };
    return (
        <div
        style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridGap: 10}}
        >
            <div className="castIntroTitle">
            LEAD WEB DEVELOPER AND STUDENT DANCER<br />NALA CHEN
            </div>

            <div className="castImage">
                <img src={nalachen_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Nala Chen is a software engineer working in data privacy. She started dancing in college when she joined her school's Chinese dance team, Fei Tian Dancers, and is excited to have the opportunity to continue to study Chinese dance styles as a student dancer. In her spare time, she enjoys plucking the guzheng, crocheting dolls, and playing Genshin Impact. 
            </div>
        </div>
    );
};
 
export default Nala;
            
            