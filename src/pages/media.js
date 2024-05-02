import React from "react";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png'
 
const Media = () => {
    const styles = {
        banner:{
            marginLeft: "15%",
            marginRight: "15%",
        },
      };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "15%",
                marginRight: "15%",                
            }}
        >
             <div className="banner" style={styles.banner}>
                <img src={BAICD_BannerImage}></img>
            </div>

            <h1>
                <div className="pageTitles">
                    PRESS COVERAGE
                </div>
            </h1>

            <div className="mediaText defaultFontXLarge">
                Highlights from engagement with reviewers, partners, and journalists. For inquiries, please see our contact/booking tab.
                <br/>

                <div className="linkReview">"<a className="allLinks" href="https://www.jen-norris-dance-rev.com/post/review-dance-mission-theater-presents-harvest-choreographers-showcase-oct-7-8-23-san-francisco?fbclid=IwAR2WVeS_lTaeZOAeyT2BlFKgcAE4aVJbsNrJOLhLh7oYSt0ENxXHtj9eZzs" target="blank">Dance Mission Theater Presents HARVEST Choreographers Showcase</a>" Jenn Norris Dance Reviews 9 Oct 2023</div>
                <div className="reviewTexts">“Two solos drawn from world dance forms shine brightly on this evening. The first, Keluarga Laut (Sea Families) is choreographed and performed by Shawn Lee to a light-hearted song sung by a Chinese high school choir. The movement, with its repeating gestures to the sky and the sea, has the flavor of classical Chinese dance. Lee's focus is a woven Chinese fishing hat with a domed top and wide round brim. Lee wears a calf length skirt, which highlights the frequent backward foot flicks that create the dance's accents. Smiling broadly with joyous energy Lee windmills and then spins dervish-like hat in hand. I imagine if this dance is traditional, it is danced to invite or celebrate a successful fishing outing.”<br /></div>
            </div>

            <h1>
                <div className="pageTitles">
                    VIDEOS
                </div>
            </h1>
            
            <div>For more performance videos, visit our Youtube channel <a className="allLinks" href="https://www.youtube.com/channel/UCjY1Ex8DIpxuw5Ywjq1rtzg" target="blank">here</a>.<br /></div>
        </div>
    );
};
 
export default Media;