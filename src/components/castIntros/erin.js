import React from "react";
import erinpang_photo from "../../images/castPhotos/erinpang_photo.png";
// import replacable
 

const Erin = () => {
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
            COMPANY DANCER<br />ERIN PANG
            </div>

            <div className="castImage">
                <img src={erinpang_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Erin grew up in San Jose in the Bay Area. Throughout 
            elementary school, she enjoyed learning and performing 
            Chinese dance at the local Chinese school. Now living 
            in Oakland and after a long hiatus from dancing, Erin 
            is returning to Chinese dance and excited to explore 
            new techniques and styles.



            </div>
        </div>
    );
};
 
export default Erin;
            
            