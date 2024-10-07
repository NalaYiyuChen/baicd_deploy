import React from "react";
import mobile_background from '../../images/mobile_background.png'

const BlogMobile = () => {

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
          }
       
    };

      return (

        <div style={style.backgroundStyles}>
            <h1 style={style.headingStyles}> <br/><br/> Blog: Check-Ins </h1>
            <div style={style.textStyles}>
            Daka, or check-ins, in Chinese dance refer to daily exercises that Classical Chinese dancers do to keep key body parts in working order. On this blog, you'll hear reflections from our choreographers, dancers, techs, and production team on how and why we've built our Company the way we have. We know Chinese dance isn't the only art form where artists can benefit from performance, filming, and other resources to push the boundaries of their art, but some people are too far away from us, either in space or in visual similarity, to come under our roof. We're always ready to help them one on one, but here we share some reflections on our process, so our lessons can propel future artistic groundbreakers wherever they may be.
            </div>
        </div>
    );
};
 
export default BlogMobile;