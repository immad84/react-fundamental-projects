import { useEffect, useState } from "react";

import Loading from "./Loading";
import Error from "./Error";

import Tour from "./Tour";

const url = "https://www.course-api.com/react-tours-project";

function Tours() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchToursData = async () => {
		try {
			const resp = await fetch(url);
			if (!resp.ok) {
				throw new Error("Error Fetching Data ");
			}
			const tours = await resp.json();
			setTours(tours);
		} catch (error) {
			if (error.name === "AbortError") {
				console.log("Fetch aborted");
			} else {
				setIsError(true);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchToursData();
	}, []);

	const handleRemoveTour = (id) => {
		const newTours = tours.filter((tour) => tour.id != id);
		setTours((currentState) => newTours);
	};

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Error />;
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button
						className="btn"
						onClick={() => {
							setIsLoading(true);
							fetchToursData();
						}}
					>
						refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<section>
			<div>
				<h2 className="title">our tours</h2>
				<div className="title-underline"></div>
			</div>
			<div className="tours">
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />;
				})}
			</div>
		</section>
	);
}

export default Tours;
