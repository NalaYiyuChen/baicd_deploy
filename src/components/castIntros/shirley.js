import React from "react";
import shirleycheng_photo from "../../images/castPhotos/shirleycheng_photo.png";
// import replacable
 

const Shirley = () => {
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
            CHOREOGRAPHER AND COMPANY DANCER<br />SHIRLEY CHENG
            </div>

            <div className="castImage">
                <img src={shirleycheng_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Shirley began dancing when she was nine years old, 
            training in classical Chinese dance at the Academy 
            of Chinese Performing Arts. At age fifteen, Shirley 
            decided to focus more on ballet and began training 
            at the Ramon Moreno School of Ballet. She later danced 
            as a trainee with the American Repertory Ballet performing 
            roles in Raymonda, Giselle, and The Nutcracker.


            </div>
        </div>
    );
};
 
export default Shirley;
            
            