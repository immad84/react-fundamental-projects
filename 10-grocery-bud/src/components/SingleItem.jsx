import React from "react";
import { useState } from "react";

function SingleItem({ id, name, completed, removeItem, editItem }) {
	// const [isChecked, setIsChecked] = useState(completed);

	// const handleChecked = () => {
	// 	setIsChecked((oldValue) => {
	// 		const newValue = !oldValue;
	// 		editItem(id, newValue);
	// 		return newValue;
	// 	});
	// };

	return (
		<article className="single-item">
			<input type="checkbox" checked={completed} onChange={() => editItem(id)} />
			<p
				// style={{
				// 	fontFamily: "Noto Nastaliq Urdu",
				// 	textDecoration: isChecked ? "line-through" : "",
				// 	textAlign: "top",
				// }}
				style={{ textDecoration: completed && "line-through", textTransform: "capitalize" }}
			>
				{name}
			</p>
			<button type="button" className="btn remove-btn" onClick={() => removeItem(id)}>
				delete
			</button>
		</article>
	);
}

export default SingleItem;
