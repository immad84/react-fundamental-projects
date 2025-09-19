import React from "react";

function Button({ children, onClick, className = " ", ...rest }) {
	return (
		<button type="button" className={className} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
