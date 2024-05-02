import React from "react";
import nathanielgoh_photo from "../../images/castPhotos/nathanielgoh_photo.png";
// import replacable
 

const Nathaniel = () => {
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
            CHINESE YOYO ARTIST AND VIDEOGRAPHER<br />NATHANIEL GOH
            </div>

            <div className="castImage">
                <img src={nathanielgoh_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Nathaniel Goh is a Data Engineer at Natron Energy helping 
            close the gap between cutting-edge technology and sustainable 
            energy solutions. Outside of work, Nathaniel enjoys playing 
            badminton, cooking, and on occasion, attempting to defy gravity 
            with diabolo tricks.



            </div>
        </div>
    );
};
 
export default Nathaniel;
            
            