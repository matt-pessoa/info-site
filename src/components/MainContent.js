import React from "react";
import reactLogo from "../images/react-logo.png";

function MainContent() {
	return (
		<div>
			<img src={reactLogo} alt="React Logo" />
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprises apps, including mobile apps</li>
			</ul>
		</div>
	);
}

export default MainContent;
