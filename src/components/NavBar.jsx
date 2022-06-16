import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<nav>
			<div className="nav-wrapper teal">
				<a href="#!" className="brand-logo">
					<i className="material-icons">cloud</i>Logo
				</a>
				<ul className="right hide-on-med-and-down">
					<li>
						<a href="#!">
							<CartWidget />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
