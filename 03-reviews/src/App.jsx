import { useEffect, useState } from "react";
import reviews from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = reviews[index];

	const checkNumber = (n) => {
		if (n > reviews.length - 1) {
			return 0;
		}
		if (n < 0) {
			return reviews.length - 1;
		}
		return n;
	};

	const handleNext = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1;
			return checkNumber(newIndex);
		});
	};

	const handlePrev = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex - 1;
			return checkNumber(newIndex);
		});
	};

	const handleRandomReview = () => {
		setIndex((currentIndex) => {
			let randomIndex = Math.floor(Math.random() * reviews.length);
			if (randomIndex == index) {
				randomIndex = randomIndex + 1;
			}
			return checkNumber(randomIndex);
		});
	};

	// useEffect(() => {
	// 	setInterval(() => {
	// 		handleRandomReview();
	// 	}, 5000);
	// }, [index]);

	return (
		<main>
			<article className="review">
				<div className="img-container">
					<img src={image} alt="image" className="person-img" />
					<span className="quote-icon">
						<FaQuoteRight />
					</span>
				</div>
				<h4 className="author">{name}</h4>
				<p className="job">{job}</p>
				<p className="info">{text}</p>
				<div className="button-container">
					<button type="button" className="prev-btn" onClick={handlePrev}>
						<FaChevronLeft />
					</button>
					<button type="button" className="next-btn" onClick={handleNext}>
						<FaChevronRight />
					</button>
				</div>
				<div className="btn-container">
					<button type="button" className="btn btn-hipster" onClick={handleRandomReview}>
						surprise me
					</button>
				</div>
			</article>
		</main>
	);
};
export default App;
