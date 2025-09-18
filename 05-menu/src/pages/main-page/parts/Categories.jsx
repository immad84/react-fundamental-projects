import Button from "../../../components/ui/Button";

function Categories({ categories, eventHandler }) {
	return (
		<div className="btn-container">
			{categories.map((category) => {
				return <Button key={category} title={category} evnetHandler={eventHandler} />;
			})}
		</div>
	);
}

export default Categories;
