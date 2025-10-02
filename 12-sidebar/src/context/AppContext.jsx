import { createContext, useContext, useState } from "react";

const Context = createContext();

function AppContext({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<Context.Provider
			value={{ isSidebarOpen, isModalOpen, openSidebar, openModal, closeSidebar, closeModal }}
		>
			{children}
		</Context.Provider>
	);
}

export const useContextProvider = () => useContext(Context);
export default AppContext;
