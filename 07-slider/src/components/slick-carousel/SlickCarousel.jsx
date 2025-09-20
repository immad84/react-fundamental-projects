import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function SlickCarousel({ people }) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
	};

	return (
		<section className="slick-container">
			<h5 style={{ marginBottom: "3rem", textAlign: "left" }}>Slick Carousel</h5>
			<Slider {...settings}>
				{people.map((person) => {
					const { id, image, name, title, quote, personIndex, activeSlide } = person;
					return (
						<article key={id}>
							<img src={image} alt={title} className="person-img" />
							<h5 className="name">{name}</h5>
							<p className="title">{title}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
			</Slider>
		</section>
	);
}

export default SlickCarousel;
