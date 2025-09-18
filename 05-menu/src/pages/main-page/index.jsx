import { useState } from "react";

import menuData from "../../data";
const categoryList = menuData.map((item) => item.category);
const categoryItems = new Set(categoryList);
const categoriesData = ["all", ...categoryItems];
// const categoriesData = ["all", ...new Set(menuData.map((item) => item.category))];

import MenuPage from "./MenuPage";
import Title from "./parts/Title";
import Categories from "./parts/Categories";

function Layout() {
	const [menu, setMenu] = useState(menuData);
	const [categories, setCategories] = useState(categoriesData);

	const handleFilterMenu = (category) => {
		if (category === "all") {
			setMenu(menuData);
			return;
		}
		const newMenu = menuData.filter((item) => item.category === category);
		setMenu(newMenu);
	};

	return (
		<div className="menu">
			<header>
				<Title title="our menu" />
				<Categories categories={categories} eventHandler={handleFilterMenu} />
			</header>
			<main>
				<MenuPage menu={menu} />
			</main>
		</div>
	);
}

export default Layout;
