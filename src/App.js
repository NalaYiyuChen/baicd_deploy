import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
// import Home from "./pages";
import About from "./pages/about";
// import Blog from "./pages/blog";
// import Cast from "./pages/cast";
import Contact from "./pages/contact";
// import Media from "./pages/media";
// import Tickets from "./pages/tickets";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/baicd_deploy" element={<About />} />
				<Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
				{/* <Route
					path="/blog"
					element={<Blog />}
				/>
				<Route
					path="/cast"
					element={<Cast />}
				/>
				<Route path="/media" element={<Media />} />
				<Route
					path="/tickets"
					element={<Tickets />}
  />*/}
				
			</Routes>
		</Router>
	);
}

export default App;
