import React from "react";
import mobile_background from '../../images/mobile_background.png'

const TicketMobile = () => {

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
            <h1 style={style.headingStyles}> <br/><br/> TICKETS/DONATE </h1>
            <div style={style.textStyles}>
            <strong>閩橋 Min Bridges: stories from the Malay World, Taiwan, and mainland China</strong> is our first produced show, on May 4th, 2024 at 8:00 pm at Theatre of Yugen in San Francisco. Tickets can be purchased at the following <a href="https://www.onthestage.tickets/show/bay-area-independent-chinese-dancers/659b90d0bf9cdf0e3d90838d" target="_blank">link</a>.
                <br></br>
                <br></br>
                <strong>Donations</strong> Donors like you are a valuable part of our community here at BAICD. We're all volunteers, but we aspire to pay our members and collaborators equitable market rates, We can't do that without your support.  You help us secure the innovative, equitable, and democratic traditional arts we all believe in. Thanks to our fiscal sponsor Shawl Anderson Dance Center (SADC), all donations to BAICD are tax-deductible. Please donate through SADC's website <a href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_6eb5e3b0-e1e5-11e8-94a1-0a7fa948a058&WidgetId=18772992" target="_blank">here</a>.
                
            </div>
        </div>
    );
};
 
export default TicketMobile;