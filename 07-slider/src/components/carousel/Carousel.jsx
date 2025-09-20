import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import Slide from "./parts/Slide";
import Button from "../ui/Button";

function Carousel({ people, activeSlide, handlePrev, handleNext }) {
	return (
		<>
			<section className="slider-container">
				<h5>Custom Carousel</h5>
				{people.map((person, personIndex) => {
					return (
						<Slide
							key={person.id}
							{...person}
							personIndex={personIndex}
							activeSlide={activeSlide}
						/>
					);
				})}
				<Button onClick={handlePrev}>
					<FaChevronLeft className="prev" />
				</Button>
				<Button onClick={handleNext}>
					<FaChevronRight className="next" />
				</Button>
			</section>
		</>
	);
}

export default Carousel;
