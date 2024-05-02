import React from "react";
import alexwong_photo from "../../images/castPhotos/alexwong_photo.png";
// import replacable
 

const Alex = () => {
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
            LIGHTING DIRECTOR AND STAGE MANAGER<br />ALEX WONG
            </div>

            <div className="castImage">
                <img src={alexwong_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Alex is a software engineer and lighting designer with 
            over 15 years experience in theatre, dance and live events 
            in the SF Bay Area and Boston. He is thrilled to be working 
            with BAICD on the Min Bridges project, his first in several 
            years.



            </div>
        </div>
    );
};
 
export default Alex;
            
            