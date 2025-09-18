import { useState } from "react";

import data from "../../data";
const categoriesData = ["all", ...new Set(data.map((item) => item.category))];

import MenuPage from "./MenuPage";

import Title from "./parts/Title";
import Categories from "./parts/Categories";

function Layout() {
	const [menu, setMenu] = useState(data);
	const [categories, setCategories] = useState(categoriesData);
	const [searchMenu, setSearchMenu] = useState(menu);

	const handleSearch = (category) => {
		const newMenu = menu.filter((item) => item.category === category);
		setSearchMenu((currentState) => {
			if (category === "all") {
				return menu;
			}
			return newMenu;
		});
	};

	return (
		<div className="menu">
			<header>
				<Title title="our menu" />
				<Categories categories={categories} evnetHandler={handleSearch} />
			</header>
			<main>
				<MenuPage menu={searchMenu} />
			</main>
		</div>
	);
}

export default Layout;
