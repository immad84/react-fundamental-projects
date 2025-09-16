import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

function Question({ id, title, info, isActive, handleToggleQuestion }) {
	// const [isAnswerOpen, setIsAnswerOpen] = useState(false);

	const isOpen = id === isActive;

	return (
		<div className="question">
			<header>
				<div>
					<h5>{title}</h5>
					{/* {isAnswerOpen && <p>{info}</p>} */}
					{isOpen && <p>{info}</p>}
				</div>
				<button
					type="button"
					className="question-btn"
					onClick={() => {
						// setIsAnswerOpen(!isAnswerOpen);
						handleToggleQuestion(id);
					}}
				>
					{/* {isAnswerOpen ? <BiMinus className="symbol" /> : <BiPlus className="symbol" />} */}
					{isOpen ? <BiMinus className="symbol" /> : <BiPlus className="symbol" />}
				</button>
			</header>
		</div>
	);
}

export default Question;
