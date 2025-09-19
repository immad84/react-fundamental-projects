import Button from "../../../../components/ui/Button";

function BtnContainer({ jobs, currentItem, setCurrentItem }) {
	return (
		<div className="btn-container">
			{jobs.map((item, index) => {
				return (
					<Button
						onClick={() => setCurrentItem(index)}
						className={currentItem === index ? "job-btn active-btn" : "job-btn"}
					>
						{item.company}
					</Button>
				);
			})}
		</div>
	);
}

export default BtnContainer;
