import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function Form({ addItem }) {
	const [itemName, setItemName] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!itemName) {
			toast.error("Must Provide A Value.  ");
			return;
		}
		addItem({ id: nanoid(), name: itemName, completed: false });
		setItemName("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h4>grocery bud</h4>
				<div className="form-control">
					<input
						type="text"
						name=""
						id=""
						className="form-input"
						value={itemName}
						onChange={(e) => setItemName(e.target.value)}
					/>
					{/* <input
						type="text"
						dir="rtl"
						style={{ fontFamily: "Noto Nastaliq Urdu" }}
						value={itemName}
						onChange={(e) => setItemName(e.target.value)}
					/> */}
					<button type="submit" className="btn">
						add item
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
