import React from "react";
import reactLogo from "../images/react-logo.png";

function Header() {
	return (
		<header>
			<nav>
				<img src={reactLogo} alt="React Logo" />
				<h3 className="blue-text">React Facts</h3>
				<h4>React Course - Project 1</h4>
			</nav>
		</header>
	);
}

export default Header;
