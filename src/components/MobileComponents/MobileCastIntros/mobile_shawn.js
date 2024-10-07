import React from "react";
import shawnIntro_photo from "../../../images/castPhotos/shawnIntro_photo.png";
// import replacable
 

const MobileShawn = () => {
    const style = {
        castImage:{
            marginLeft: "auto",
            marginRight: "auto",
            
            display: "flex",
            flex: 1,
            borderRadius: "50%",
            width: "12em",
            height: "12em",
            resizeMode: 'contain',
            overflow: 'hidden',

            border: "4px solid #ff8a00"
        },
        castIntroTitle: {
            textAlign: 'center',
            color: 'white',
        },
        castIntroText: {
            textAlign: 'justify',
            marginLeft: '8%',
            marginRight: '8%',
            color: 'white',
          }
      };
    return (
        <div
        style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridGap: 10}}
        >

            <div style={style.castImage}>
                <img src={shawnIntro_photo}></img>
            </div>

            <div style={style.castIntroTitle}>
            SHAWN LEE<br/><br/>ARTISTIC DIRECTOR AND EXECUTIVE PRODUCER<br/>
            </div>

            <div style={style.castIntroText}>
            Shawn has 10 years' experience as a classical and folk Chinese dancer 
            in Bay Area collegiate Chinese dance groups. Shawn is passionate about
            pushing the line between contemporality and tradition, challenging 
            ahistorical unions of religion, nationalism, and normative gender. 
            Shawn loves lifting up over artists, and giving them the space to 
            express their own voice. 
            Shawn previously served as Executive Producer for Fei Tian Dancer's 
            20th anniversary showcase, directing a fundraising strategy and 
            supports development and administrative strategy for 2kAve, an East 
            Bay based k-pop group, and serves as a Policy Advisor for Save 
            Cantonese. As Save Cantonese's form
            </div>
        </div>
    );
};
 
export default MobileShawn;
            
            