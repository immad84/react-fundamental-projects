import { useState } from "react";

function Form({ addColor }) {
	const [color, setColor] = useState("#4acf8a");

	const handleChange = (e) => {
		setColor((oldColor) => {
			return e.target.value;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor(color);
	};

	return (
		<section className="container">
			<h4>color generator</h4>
			<form className="color-form" onSubmit={handleSubmit}>
				<input type="color" name="" id="" value={color} onChange={handleChange} />
				<input
					type="text"
					name=""
					id=""
					placeholder="#4acf8a"
					value={color}
					onChange={handleChange}
				/>
				<button type="submit" className="btn">
					submit
				</button>
			</form>
		</section>
	);
}

export default Form;
