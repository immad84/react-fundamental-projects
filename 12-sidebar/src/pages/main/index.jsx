import { FaBars } from "react-icons/fa";
import { useContextProvider } from "../../context/AppContext";

function Home() {
	const { openModal, openSidebar } = useContextProvider();
	return (
		<main>
			<button type="button" className="sidebar-toggle" onClick={openSidebar}>
				<FaBars />
			</button>
			<button type="button" className="btn" onClick={openModal}>
				show modal
			</button>
		</main>
	);
}

export default Home;
