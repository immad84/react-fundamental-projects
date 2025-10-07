import { useRef } from "react";
import { useSidebarContext } from "../context/SidebarContextProvider";
import sublinks from "../data";

function Submenu() {
	const { pageId, setPageId } = useSidebarContext();
	const currentPage = sublinks.find((item) => item.pageId === pageId);
	const subMenuRef = useRef();

	const handleMouseLeave = (e) => {
		const { left, right, bottom } = subMenuRef.current.getBoundingClientRect();
		const { clientX, clientY } = e;
		if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
			setPageId(null);
		}
	};

	return (
		<div
			className={currentPage ? "submenu show-submenu" : "submenu"}
			onMouseLeave={handleMouseLeave}
			ref={subMenuRef}
		>
			<h5>{currentPage?.page}</h5>
			<div
				className="submenu-links"
				style={{ gridTemplateColumns: currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr" }}
			>
				{currentPage?.links?.map((link) => {
					const { id, url, icon, label } = link;
					return (
						<a key={id} href={url}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default Submenu;
