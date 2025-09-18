import MenuItem from "./parts/MenuItem";

function MenuPage({ menu }) {
	return (
		<section className="section-center">
			{menu.map((menuItem) => {
				return <MenuItem key={menuItem.id} {...menuItem} />;
			})}
		</section>
	);
}

export default MenuPage;
