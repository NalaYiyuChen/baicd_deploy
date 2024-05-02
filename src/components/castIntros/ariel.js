import React from "react";
import arielliu_photo from "../../images/castPhotos/arielliu_photo.png";
// import replacable
 

const Ariel = () => {
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
            COMPANY DANCER<br />ARIEL LIU
            </div>

            <div className="castImage">
                <img src={arielliu_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Ariel Liu has practiced and performed classical and folk 
            Chinese Dance for over a decade and dabbles in other dance 
            forms such as jazz, waltz, swing, and salsa. Ariel was 
            previously the president of Stanford Chinese Dance group. 
            She is currently an active member of the Chinese Performing 
            Arts of America (CPAA) dance troupe and performs at Spring 
            Festival Galas and non-profit events around the Bay. She is 
            grateful for the opportunity to explore solo projects and 
            dive deeper into her Chinese roots with Bay Area Independent 
            Chinese Dancers.  


            </div>
        </div>
    );
};
 
export default Ariel;
            
            