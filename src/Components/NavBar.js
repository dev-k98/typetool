import React from "react"
import { Link } from "react-router-dom"

import "../Styles/Nav.css"

export default function NavBar() {
	return (
		<>
			<header className='nav-bar'>
				<div className='logo'>
					<h1>logo</h1>
				</div>
				<div className='sub-nav'>
					<Link to={"/"} className='nav home'>
						<div>Home</div>
					</Link>
					<Link to={"/progress"} className='nav progress'>
						<div>Progress</div>
					</Link>
					<Link className='nav profile' to={"/profile"}>
						<div>Profile</div>
					</Link>
					<Link className='nav about' to={"/about"}>
						<div>About</div>
					</Link>
				</div>
			</header>
		</>
	)
}
