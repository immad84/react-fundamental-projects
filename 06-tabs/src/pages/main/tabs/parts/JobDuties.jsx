import { v4 as uuidv4 } from "uuid";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function JobDuties({ duties }) {
	return (
		<div>
			{duties.map((duty, index) => {
				return (
					<div className="job-desc" key={uuidv4()}>
						<MdKeyboardDoubleArrowRight className="job-icon" />
						<p>{duty}</p>
					</div>
				);
			})}
		</div>
	);
}

export default JobDuties;
