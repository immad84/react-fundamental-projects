import { useState } from "react";
import data from "../../../data";

import Question from "./Question";

function Questions() {
	const [questions, setQuestions] = useState(data);
	const [active, setActive] = useState(null);

	const handleToggleActive = (id) => {
		setActive(() => {
			if (active === id) {
				return null;
			}
			return id;
		});
	};
	return (
		<>
			{questions.map((question) => {
				return (
					<Question
						key={question.id}
						{...question}
						active={active}
						handleToggleActive={handleToggleActive}
					/>
				);
			})}
		</>
	);
}

export default Questions;
