import { Navbar, Sidebar, Submenu } from "../../components";
import Hero from "./parts/Hero";

function HomePage() {
	return (
		<div id="home">
			<Navbar />
			<Sidebar />
			<Submenu />
			<main>
				<Hero />
			</main>
		</div>
	);
}

export default HomePage;
