import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [pageId, setPageId] = useState(null);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<SidebarContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				pageId,
				setPageId,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebarContext = () => useContext(SidebarContext);
