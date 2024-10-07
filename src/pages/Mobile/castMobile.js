import React from "react";
import mobile_background from '../../images/mobile_background.png'

import MobileShawn from '../../components/MobileComponents/MobileCastIntros/mobile_shawn'
const CastIntroMobile = () => {

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
            <h1 style={style.headingStyles}> <br/><br/> Cast / Crew </h1>
            <MobileShawn />
        </div>
    );
};
 
export default CastIntroMobile;