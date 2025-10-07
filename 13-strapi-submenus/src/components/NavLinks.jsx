import { useSidebarContext } from "../context/SidebarContextProvider";
import sublinks from "../data";

function NavLinks() {
	const { setPageId } = useSidebarContext();
	return (
		<div className="nav-links">
			{sublinks.map((item) => {
				const { pageId, page } = item;
				return (
					<button
						type="button"
						key={pageId}
						className="nav-link"
						onMouseEnter={() => setPageId(pageId)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
}

export default NavLinks;
