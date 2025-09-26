import { useState } from "react";
import { Form, ColorList } from "./components";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
	const [colors, setColors] = useState(new Values("#4acf8a").all(10));

	const addColor = (color) => {
		try {
			const colorValues = new Values(color).all(10);
			setColors(colorValues);
			toast.success("color generated successfully.");
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<main>
			<Form addColor={addColor} />
			<ColorList colors={colors} />
			<ToastContainer position="bottom-right" />
		</main>
	);
};
export default App;
