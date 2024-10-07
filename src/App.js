import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

// Mobile 
import AboutMobile from "./pages/Mobile/aboutMobile";
import BlogMobile from "./pages/Mobile/blogMobile";
import CastIntroMobile from "./pages/Mobile/castMobile";
import ContactMobile from "./pages/Mobile/contactMobile";
import MobileNavbar from "./components/MobileComponents/MobileNavbar"

import {
	HashRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
// import Home from "./pages";

// Desktop
import About from "./pages/about";
import Blog from "./pages/blog";
import Cast from "./pages/cast";
import Contact from "./pages/contact";
import Media from "./pages/media";
import Tickets from "./pages/tickets";

import { useMediaQuery } from 'react-responsive';


function App() {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? mobileSite() : desktopSite();		 
}

function desktopSite() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/about" element={<About />} />
				<Route path="/cast" element={<Cast />} />
				<Route path="/media" element={<Media />} />
				<Route path="/tickets" element={<Tickets />}/>
				<Route path="/blog" element={<Blog />} />
        		<Route path="/contact" element={<Contact />} /> 				
			</Routes>
		</Router>
	);
}

function mobileSite() {
	return (
		<Router>
			<MobileNavbar />
			<Routes>
				<Route path="/" element={<AboutMobile />} />
				<Route path="/about" element={<AboutMobile />} />	
				<Route path="/cast" element={<CastIntroMobile />} />
				<Route path="/blog" element={<BlogMobile />} />
				<Route path="/contact" element={<ContactMobile />} /> 				
			</Routes>
		</Router>
	);
}

export default App;
