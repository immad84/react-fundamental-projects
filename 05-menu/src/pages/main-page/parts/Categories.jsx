import Button from "../../../components/ui/Button";

function Categories({ categories, evnetHandler }) {
	return (
		<div className="btn-container">
			{categories.map((category) => {
				return <Button key={category} title={category} evnetHandler={evnetHandler} />;
			})}
		</div>
	);
}

export default Categories;
