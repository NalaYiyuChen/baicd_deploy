// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	// NavBtn,
	// NavBtnLink,
} from "../MobileNavbar/navbarElements";
// import baicd_logo from "../../../images"

const MobileNavbar = () => {
	return (
		<>
			<Nav>
				<Bars height="25px"/>

				{/* <NavMenu>
					<NavLink to="/about" >
						<img src={baicd_logo} alt="logo" height="125px" width="auto"/>
					</NavLink>
					
					<NavLink to="/about" >
						ABOUT
					</NavLink>

					<NavLink to="/cast" activeStyle>
						CAST AND CREW
					</NavLink>

					<NavLink to="/media" activeStyle>
						MEDIA COVERAGE
					</NavLink>

					<NavLink to="/tickets" activeStyle>
						TICKETS/DONATE
					</NavLink>

					<NavLink to="/blog" activeStyle>
						BLOG: /CHECK-INS
					</NavLink>

					<NavLink to="/contact" activeStyle>
						CONTACT/BOOKING
					</NavLink>  */}
				{/* </NavMenu> */}
			</Nav>
		</>
	);
};

export default MobileNavbar;
