import React, { useState } from "react";
import Question from "./Question";

import questionsData from "./data";

function Questions() {
	const [questions, setQuestions] = useState(questionsData);
	const [isActive, setIsActive] = useState(null);

	const handleToggleQuestion = (id) => {
		const newId = isActive === id ? null : id;
		setIsActive(newId);
	};

	return (
		<>
			{questions.map((question) => {
				return (
					<Question
						key={question.id}
						{...question}
						isActive={isActive}
						handleToggleQuestion={handleToggleQuestion}
					/>
				);
			})}
		</>
	);
}

export default Questions;
