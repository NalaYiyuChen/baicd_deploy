// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	// NavBtn,
	// NavBtnLink,
} from "../Navbar/navbarElements";
import baicd_logo from "../../images/baicd_logo.png"

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/about" >
						<img src={baicd_logo} alt="logo" height="125px" width="auto"/>
					</NavLink>
					<NavLink to="/about" >
						ABOUT
					</NavLink>
					<NavLink to="/contact" activeStyle>
						CONTACT/BOOKING
					</NavLink> 
					{/* <NavLink to="/cast" activeStyle>
						CAST AND CREW
					</NavLink>
					<NavLink to="/tickets" activeStyle>
						TICKETS/DONATE
					</NavLink>
					<NavLink to="/blog" activeStyle>
						BLOG: /CHECK-INS
					</NavLink>
					<NavLink to="/media" activeStyle>
						MEDIA COVERAGE
	</NavLink>*/}

				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
