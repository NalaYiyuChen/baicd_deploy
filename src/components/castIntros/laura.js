import React from "react";
import laurauyeki_photo from "../../images/castPhotos/laurauyeki_photo.png";
// import replacable
 

const Laura = () => {
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
            ASSISTANT PRODUCER<br />LAURA UYEKI
            </div>

            <div className="castImage">
                <img src={laurauyeki_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Laura Lowe Uyeki is a producer, writer and artist based 
            out of the Bay Area in Orinda, California. She graduated 
            from the University of Puget Sound in 2017, with a B.A in 
            Theatre Arts and a minor in English. She has been involved 
            in the arts in various ways since she was a little kid, 
            and as a result has a career that spans over a decade long. 
            Her previous experience includes being a theatrical designer, 
            producer, and assistant stage manager, as well as being the 
            co-founder of Rainy Day Artistic Collective (an independent 
            virtual theater company based out of Washington State). 

            </div>
        </div>
    );
};
 
export default Laura;
            
            