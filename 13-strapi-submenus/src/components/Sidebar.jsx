import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useSidebarContext } from "../context/SidebarContextProvider";

function Sidebar() {
	const { isSidebarOpen, closeSidebar } = useSidebarContext();
	return (
		<aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
			<div className="sidebar-container">
				<button type="button" className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className="sidebar-links">
					{sublinks.map((sublink) => {
						const { pageId, page, links } = sublink;
						return (
							<article key={pageId}>
								<h4>{page}</h4>
								<div className="sidebar-sublinks">
									{links.map((item) => {
										const { id, label, icon, url } = item;
										return (
											<a key={id} href={url}>
												{icon} {label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
