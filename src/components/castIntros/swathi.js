import React from "react";
import swathinarayanan_photo from "../../images/castPhotos/swathinarayanan_photo.png";
// import replacable
 

const Swathi = () => {
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
            KANARTIC VOCALIST<br />SWATHI NARAYANAN
            </div>

            <div className="castImage">
                <img src={swathinarayanan_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Swathi Narayanan is a South Indian vocalist based in the 
            Bay Area. She has practiced Carnatic, or South Indian Classical 
            Music since the age of 5. A disciple of Smt. Radha Kalyan, 
            she follows the classical tradition established by Vidwan 
            Thanjavur S. Kalyanaraman. In addition to performing in the 
            United States and India, Swathi also teaches vocal music in 
            her spare time.



            </div>
        </div>
    );
};
 
export default Swathi;
            
            