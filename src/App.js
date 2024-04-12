// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// filename -App.js

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
// import Contact from "./pages/contact";
// import Media from "./pages/media";
// import Tickets from "./pages/tickets";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/about" element={<About />} />
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
				/>
				<Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
