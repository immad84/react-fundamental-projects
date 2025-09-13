import React, { useState } from "react";

function Tour({ id, image, info, name, price, handleRemoveTour }) {
	const [isReadMore, setIsReadMore] = useState(false);
	return (
		<article className="single-tour">
			<img src={image} alt="tour image" className="img" />
			<span className="tour-price">{price}</span>
			<div className="tour-info">
				<h5>{name}</h5>
				<p>
					{isReadMore ? info : info.slice(0, 100) + " ....."}{" "}
					<button
						type="button"
						className="info-btn"
						onClick={() => setIsReadMore(!isReadMore)}
					>
						{isReadMore ? "show less" : "read more"}
					</button>
				</p>
				<button
					type="button"
					className="btn btn-block delete-btn"
					onClick={() => handleRemoveTour(id)}
				>
					not interested
				</button>
			</div>
		</article>
	);
}

export default Tour;
