import { useEffect, useState } from "react";
import { shortList, list, longList } from "../../../data";

// import Carousel from "./parts/Carousel";
import Carousel from "../../../components/carousel/Carousel";
import SlickCarousel from "../../../components/slick-carousel/SlickCarousel";

function LandingPage() {
	const [people, setPeople] = useState(list);
	const [activeSlide, setActiveSlide] = useState(0);

	const handlePrev = () => {
		setActiveSlide((currentPerson) => {
			const nextPerson = (currentPerson - 1 + people.length) % people.length;
			return nextPerson;
			// let nextPerson = currentPerson;
			// if (currentPerson <= 0) {
			// 	return people.length - 1;
			// }
			// return nextPerson - 1;
		});
	};
	const handleNext = () => {
		setActiveSlide((currentPerson) => {
			const nextPerson = (currentPerson + 1) % people.length;
			return nextPerson;
			// let nextPerson = currentPerson;
			// if (currentPerson >= people.length - 1) {
			// 	return 0;
			// }
			// return nextPerson + 1;
		});
	};

	useEffect(() => {
		const sliderId = setInterval(() => {
			handleNext();
		}, 2500);
		return () => {
			clearInterval(sliderId);
		};
	}, [activeSlide]);

	return (
		<main id="landing-page" className="main-container">
			<section className="carousel-container">
				<SlickCarousel people={people} />
				<Carousel
					people={people}
					activeSlide={activeSlide}
					handlePrev={handlePrev}
					handleNext={handleNext}
				/>
			</section>
		</main>
	);
}

export default LandingPage;
