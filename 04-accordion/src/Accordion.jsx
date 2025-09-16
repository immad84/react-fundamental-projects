import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

import questionsData from "./data";

function Accordion() {
	const [questions, setQuestions] = useState(questionsData);
	const [activeQuestion, setActiveQuestion] = useState(null);

	const handleToggleQuestion = (id) => {
		setActiveQuestion(id);
	};

	return (
		<>
			{questions.map((question) => {
				const { id, title, info } = question;
				const isOpen = activeQuestion === id;
				return (
					<div key={id} className="question">
						<header>
							<div>
								<h5>{title}</h5>
								{isOpen && <p>{info}</p>}
							</div>
							{isOpen ? (
								<button
									type="button"
									className="question-btn"
									onClick={() => setActiveQuestion(null)}
								>
									<BiMinus className="symbol" />
								</button>
							) : (
								<button
									type="button"
									className="question-btn"
									onClick={() => {
										handleToggleQuestion(id);
									}}
								>
									<BiPlus className="symbol" />
								</button>
							)}
						</header>
					</div>
				);
			})}
		</>
	);
}

export default Accordion;
