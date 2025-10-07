import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "../context/SidebarContextProvider";

import NavLinks from "./NavLinks";

function Navbar() {
	const { openSidebar, setPageId } = useSidebarContext();

	const handleSubmenu = (e) => {
		// console.log(e.targer);
		if (!e.target.classList.contains("nav-link")) {
			setPageId(null);
		}
	};
	return (
		<nav className="nav" onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<header className="nav-header">
					<h3 className="logo">Logo</h3>
					<button type="button" className="toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</header>
				<NavLinks />
			</div>
		</nav>
	);
}

export default Navbar;
