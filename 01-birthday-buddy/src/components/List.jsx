import React from "react";

import Person from "./Person";

function List({ birthdays, handleRemoveBirthday }) {
	return (
		<ul className="flex flex-col justify-items-center">
			{birthdays.map((person) => {
				const { id } = person;
				return <Person {...person} handleRemoveBirthday={handleRemoveBirthday} key={id} />;
			})}
		</ul>
	);
}

export default List;
