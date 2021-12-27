import React from "react";
import "./css/App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
	return (
		<div className="container">
			<Header />
			<MainContent />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
