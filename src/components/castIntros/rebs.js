import React from "react";
import rebschan_photo from "../../images/castPhotos/rebschan_photo.png";
// import replacable
 

const Rebs = () => {
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
            DRAMATURG AND SCRIPT CONSULTANT<br />REBS CHAN
            </div>

            <div className="castImage">
                <img src={rebschan_photo} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            Rebs Chan is a playwright, dramaturg, sound designer and 
            actor based in the Bay Area and Metro Detroit. Originally 
            from Howell, MI, they recently graduated from Kalamazoo 
            College with honors in Theatre Arts and completed a year 
            teaching abroad in Taiwan on a Fulbright grant. Across 
            their artistic work, their prime objective is intersectionality- 
            creating and supporting theatre that is intersectional in 
            both representation, language and artistic form.

            They are currently Berkeley Repertory Theatre’s Peter F. 
            Sloss Artistic Fellow. They also serve as a reader for 
            Off-Broadway Playwrights Horizons in New York. Rebs has 
            written and presented original work through Yun Theatre, 
            Festival Playhouse, Queer Theatre Kalamazoo, the Theatre 
            Kalamazoo New PLayfest, and the Asian American Music Video Fest.
            </div>
        </div>
    );
};
 
export default Rebs;
            
            