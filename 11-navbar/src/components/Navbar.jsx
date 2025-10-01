import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";

import { links } from "../constants/navigation";
import { social } from "../constants/social";

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleButtonRef = useRef(null);

	const handleClick = () => {
		setShowLinks(!showLinks);
	};

	const listener = (e) => {
		console.log("calling Window listener");
		console.log(showLinks);

		if (toggleButtonRef.current && toggleButtonRef.current.contains(e.target)) return;
		if (linksContainerRef.current && linksContainerRef.current.contains(e.target)) return;

		setShowLinks(false);
	};

	useEffect(() => {
		window.addEventListener("click", listener);
		return () => {
			window.removeEventListener("click", listener);
		};
	}, []);

	const linkStyles = {
		height: showLinks ? `${linksRef.current.getBoundingClientRect().height + 32}px` : "0px",
	};

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" className="logo" />
					<button
						type="button"
						onClick={handleClick}
						className="nav-toggle"
						ref={toggleButtonRef}
					>
						<FaBars />
					</button>
				</div>

				<div className="links-container" ref={linksContainerRef} style={linkStyles}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="social-icons">
					{social.map((item) => {
						const { id, url, icon } = item;
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
