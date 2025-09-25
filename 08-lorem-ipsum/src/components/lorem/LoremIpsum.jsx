import { useState } from "react";
import { nanoid } from "nanoid";

import textData from "../../data";

function LoremIpsum() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const amount = parseInt(count);
		const paragraphs = textData.slice(0, amount);
		setText(paragraphs);
	};

	return (
		<section className="section-center">
			<h4>tired of boring lorem ipsum?</h4>
			<form action="" className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="paragraphs">paragraphs: </label>
				<input
					type="number"
					min={1}
					max={8}
					step={1}
					name="paragraphs"
					id="paragraphs"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>

				<button type="submit" className="btn">
					generate
				</button>
			</form>
			<div className="lorem-text">
				{text.map((item) => {
					return <p key={nanoid()}>{item}</p>;
				})}
			</div>
		</section>
	);
}

export default LoremIpsum;
