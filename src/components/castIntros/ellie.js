import React from "react";
import elliewong_photo from "../../images/castPhotos/elliewong_photo.png";
// import replacable
 

const Ellie = () => {
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
            COMPANY DANCER<br />ELLIE WONG
            </div>

            <div className="castImage">
                <img src={elliewong_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Ellie Wong grew up in Johns Creek, Georgia and has been 
            training in ballet and Chinese dance since the age of 5. 
            She trained at Morningstar Dance Academy for 12 years and 
            received numerous awards and scholarships at the Beijing 
            International Ballet and Choreography Competition, World 
            Ballet Competition, and Youth America Grand Prix. In 
            college, Ellie has performed with various student groups 
            in ballet, contemporary, Chinese dance, and hip hop. She 
            is currently Executive Director of Cardinal Ballet Company, 
            Stanford’s only student-run ballet company.




            </div>
        </div>
    );
};
 
export default Ellie;
            
            