import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

function Question({ id, title, info, active, handleToggleActive }) {
	const isOpen = active === id;

	return (
		<div className="question">
			<header>
				<div>
					<h5>{title}</h5>
				</div>
				<button
					type="button"
					className="question-btn"
					onClick={() => {
						handleToggleActive(id);
					}}
				>
					{isOpen ? <BiMinus className="symbol" /> : <BiPlus className="symbol" />}
				</button>
			</header>
			{isOpen && <p>{info}</p>}
		</div>
	);
}

export default Question;
