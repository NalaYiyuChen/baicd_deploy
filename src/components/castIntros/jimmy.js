import React from "react";
import jimmywing_photo from "../../images/castPhotos/jimmywing_photo.png";

const Jimmy = () => {
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
            COMPOSER AND SOUND TECHNICIAN<br />JIMMY WING
            </div>

            <div className="castImage">
                <img src={jimmywing_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            
            Jimmy is a Music Producer, Singer, and Songwriter based in Walnut, California. An alumnus of Musicians Institute Hollywood, Jimmy holds degrees in Recording, Keyboard Performance, and Music Business. Further enriching his academic portfolio, he participated in a two-year foreign exchange program at the Central Conservatory of Music in Beijing, China, specializing in composition. Throughout his illustrious career, Jimmy has collaborated with a diverse array of artists and musicians on a multitude of international projects. Notably, he has made significant contributions to a Buddhist Organization known worldwide by composing ceremonial mantra music that has been showcased in stadiums globally. Furthermore, Jimmy played a pivotal role as the music director and composer for Hong Kong’s pioneering and one of the largest bodybuilding competition, marking a milestone in the region’s entertainment and sports industry. His career is marked by a continuous quest for innovation, pushing the boundaries of music by experimenting with new elements and challenging traditional musical norms. This drive is exemplified by his collaboration with the Min Bridges project alongside the Bay Area Independent Chinese Dancers, showcasing his commitment to creating art that transcends conventional boundaries and promotes cultural integration.



            </div>
        </div>
    );
};
 
export default Jimmy;
            
            