import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

function ColorList({ colors }) {
	return (
		<section className="colors" style={{ marginBottom: "2rem" }}>
			{colors.map((color, index) => {
				return <SingleColor key={nanoid()} color={color} index={index} />;
			})}
		</section>
	);
}

export default ColorList;
