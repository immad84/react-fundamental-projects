import { useEffect, useState } from "react";

const url = "https://www.course-api.com/react-tabs-project";

import Loading from "../../../components/loading/Loading";
import ErrorPage from "../../error/ErrorPage";

import BtnContainer from "./parts/BtnContainer";
import JobsInfo from "./parts/JobsInfo";

function TabsPage() {
	const [jobsData, setJobsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const [currentItem, setCurrentItem] = useState(0);
	// const [index, setIndex] = useState(0);

	const fetchData = async () => {
		try {
			const resp = await fetch(url);
			if (!resp.ok) {
				throw new Error("Error Fetching Data ");
			}
			const jobs = await resp.json();
			setJobsData(jobs);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <ErrorPage />;
	}

	// const { id, order, title, dates, duties, company } = jobsData[index];

	return (
		<section className="jobs-center">
			<BtnContainer
				jobs={jobsData}
				currentItem={currentItem}
				setCurrentItem={setCurrentItem}
			/>
			{/* <JobsInfo title={title} dates={dates} duties={duties} company={company} /> */}
			<JobsInfo jobs={jobsData} currentItem={currentItem} />
		</section>
	);
}

export default TabsPage;
