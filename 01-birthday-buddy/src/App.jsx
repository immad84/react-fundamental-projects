import { useState } from "react";

import data from "./data";

import List from "./components/List";
import Button from "./components/ui/Button";

const App = () => {
	const [birthdays, setBirthdays] = useState(data);
	const count_birthdays = birthdays.length;
	const handleClearAll = () => {
		setBirthdays((currentState) => {
			return [];
		});
	};
	const handleRemoveBirthday = (id) => {
		const newBirthdayList = birthdays.filter((birthday) => birthday.id !== id);
		setBirthdays((currentState) => {
			return newBirthdayList;
		});
	};
	const handleReset = () => {
		setBirthdays((currentState) => {
			return data;
		});
	};
	const handleShuffleBirthdays = () => {
		setBirthdays((currentState) => {
			const newState = [...currentState];
			for (let i = newState.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[newState[i], newState[j]] = [newState[j], newState[i]];
			}
			return newState;
		});
	};

	return (
		<div className="bg-gray-200 p-2 font-mono">
			<div className="container max-w-[600px] mx-auto bg-white p-4 rounded-lg">
				<div className="flex justify-items-center justify-between">
					<h2 className="font-roboto font-normal text-2xl text-[#50d71e] tracking-wide capitalize">
						{count_birthdays} Birthdays Today
					</h2>
					<div>
						<button
							type="button"
							className="h-7 mt-1 mx-2 capitalize px-2 bg-[#D946EF] rounded font-sans font-normal text-white text-[13.33px] leading-[100%] tracking-[1px] text-center align-middle capitalize"
							onClick={handleShuffleBirthdays}
						>
							Shuffle Birthdays
						</button>
						<button
							type="button"
							className="h-7 mt-1 capitalize px-2 bg-[#D946EF] rounded font-sans font-normal text-white text-[13.33px] leading-[100%] tracking-[1px] text-center align-middle capitalize"
							onClick={handleReset}
						>
							Reset
						</button>
					</div>
				</div>
				<List birthdays={birthdays} handleRemoveBirthday={handleRemoveBirthday} />
				<Button handleClearAll={handleClearAll} />
			</div>
		</div>
	);
};
export default App;
