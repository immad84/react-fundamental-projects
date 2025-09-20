import { FaQuoteRight } from "react-icons/fa";

function Carousel({ id, image, name, title, quote, personIndex, activeSlide, setActiveSlide }) {
	return (
		<article
			className="slide"
			style={{
				transform: `translateX(${100 * (personIndex - activeSlide)}%)`,
				opacity: personIndex === activeSlide ? 1 : 0,
				visibility: personIndex === activeSlide ? "visible" : "hidden",
			}}
		>
			<img src={image} alt={title} className="person-img" />
			<h5 className="name">{name}</h5>
			<p className="title">{title}</p>
			<p className="text">{quote}</p>
			<FaQuoteRight className="icon" />
		</article>
	);
}

export default Carousel;
