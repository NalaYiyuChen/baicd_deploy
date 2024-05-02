import React from "react";
import "../App.css";
import Genevieve from "../components/castIntros/genevieveIntro";
import Shawn from "../components/castIntros/shawnintro";
import Stephanie from "../components/castIntros/stephanieintro";
import Ariel from "../components/castIntros/ariel";
import Rebs from "../components/castIntros/rebs";
import Laura from "../components/castIntros/laura";
import Shirley from "../components/castIntros/shirley";
import Alex from "../components/castIntros/alex";
import Erin from "../components/castIntros/erin";
import Nathaniel from "../components/castIntros/nathaniel";
import Ellie from "../components/castIntros/ellie";
import Tiffany from "../components/castIntros/tiffany";
import Nala from "../components/castIntros/nala";
import Jimmy from "../components/castIntros/jimmy";
import Swathi from "../components/castIntros/swathi";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png';

import Grid from '@mui/material/Grid';

const Cast = () => {
    const styles = {
        castText: {
            textAlign: "justify", 
        },
      };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100%',
                min_height: '100vh',
                marginLeft: '12%', 
                marginRight: '12%',
            }}
        >
            <div className="banner" style={styles.banner}>
                <img src={BAICD_BannerImage}></img>
            </div>
            <h1>
                <div className="pageTitles">
                        CAST AND CREW
                </div>
            </h1>

            <div className="defaultFontXLarge">
            
            We are proud to invest equally in cast and crew. 
            We are especially proud of our broad array of artistic 
            collaborators and technical supports, and the many talents 
            they have outside of BAICD.
            <br/>
            </div>

            <div className="parent">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Genevieve /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Shawn /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Stephanie /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Ariel /></div>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Rebs /></div>
                    </Grid>      
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Laura /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <div className="castText castIntroText"><Shirley /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Alex /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Erin /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Nathaniel /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Ellie /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Tiffany /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Nala /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Jimmy /></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className="castText castIntroText"><Swathi /></div>
                    </Grid>
                </Grid>  
            </div>

            <div><br></br></div>

            
        </div>
    );
};
 
export default Cast;