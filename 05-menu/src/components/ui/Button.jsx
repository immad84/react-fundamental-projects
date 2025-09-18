import React from "react";

function Button({ title, evnetHandler }) {
	return (
		<button type="button" className="btn" onClick={() => evnetHandler(title)}>
			{title}
		</button>
	);
}

export default Button;
