import React from "react";
import mobile_background from '../../images/mobile_background.png'

const MediaMobile = () => {

    const style = {
        backgroundStyles: {
            backgroundImage:`url("${mobile_background}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        },
        headingStyles: {
            textAlign: 'center',
            color: 'white',
        },
        textStyles: {
            textAlign: 'justify',
            marginLeft: '8%',
            marginRight: '8%',
            color: 'white',
          },
        linkStyles: {
            color: 'white',
            fontWeight: 'bold'
        }
       
    };

      return (

        <div style={style.backgroundStyles}>
            <h1 style={style.headingStyles}> <br/><br/> Press Coverage </h1>
            <div style={style.textStyles}>
     
            <div>
                Highlights from engagement with reviewers, partners, and journalists. For inquiries, please see our contact/booking tab.
                <br/>

                <div >"<a style={style.linkStyles} href="https://www.jen-norris-dance-rev.com/post/review-dance-mission-theater-presents-harvest-choreographers-showcase-oct-7-8-23-san-francisco?fbclid=IwAR2WVeS_lTaeZOAeyT2BlFKgcAE4aVJbsNrJOLhLh7oYSt0ENxXHtj9eZzs" target="blank">Dance Mission Theater Presents HARVEST Choreographers Showcase</a>" Jenn Norris Dance Reviews 9 Oct 2023</div>
                <br/> 
                <div >“Two solos drawn from world dance forms shine brightly on this evening. The first, Keluarga Laut (Sea Families) is choreographed and performed by Shawn Lee to a light-hearted song sung by a Chinese high school choir. The movement, with its repeating gestures to the sky and the sea, has the flavor of classical Chinese dance. Lee's focus is a woven Chinese fishing hat with a domed top and wide round brim. Lee wears a calf length skirt, which highlights the frequent backward foot flicks that create the dance's accents. Smiling broadly with joyous energy Lee windmills and then spins dervish-like hat in hand. I imagine if this dance is traditional, it is danced to invite or celebrate a successful fishing outing.”<br /></div>
            </div>

            <h1>
                <div >
                    VIDEOS
                </div>
            </h1>
            
            <div>For more performance videos, visit our Youtube channel <a style={style.linkStyles} href="https://www.youtube.com/channel/UCjY1Ex8DIpxuw5Ywjq1rtzg" target="blank">here</a>.<br /></div>
            </div>
        </div>
    );
};
 
export default MediaMobile;