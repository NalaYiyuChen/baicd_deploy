import React from "react";
import shawnIntro_photo from "../../images/castPhotos/shawnIntro_photo.png";
// import replacable
 

const Shawn = () => {
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
            ARTISTIC DIRECTOR AND EXECUTIVE PRODUCER<br />SHAWN LEE
            </div>

            <div className="castImage">
                <img src={shawnIntro_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Shawn has 10 years’ experience as a classical and folk Chinese dancer 
            in Bay Area collegiate Chinese dance groups. Shawn is passionate about
            pushing the line between contemporality and tradition, challenging 
            ahistorical unions of religion, nationalism, and normative gender. 
            Shawn loves lifting up over artists, and giving them the space to 
            express their own voice. 
            Shawn previously served as Executive Producer for Fei Tian Dancer’s 
            20th anniversary showcase, directing a fundraising strategy and 
            supports development and administrative strategy for 2kAve, an East 
            Bay based k-pop group, and serves as a Policy Advisor for Save 
            Cantonese. As Save Cantonese’s form
            </div>
        </div>
    );
};
 
export default Shawn;
            
            