import { useState } from "react";
import { Form, Items } from "./components";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
	localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		list = JSON.parse(localStorage.getItem("list"));
	} else {
		list = [];
	}
	return list;
};

var getLocalStorageSize = function () {
	var total = 0;
	for (var x in localStorage) {
		var amount = (localStorage[x].length * 2) / 1024 / 1024;
		if (!isNaN(amount) && localStorage.hasOwnProperty(x)) {
			console.log(x, localStorage.getItem(x), amount);
			total += amount;
		}
	}
	return total.toFixed(2);
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[ ]");

const App = () => {
	const [items, setItems] = useState(getLocalStorage());

	const addItem = (item) => {
		const newItems = [...items, item];
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success("Item Added In The List. ");
		console.log(getLocalStorageSize());
	};

	const removeItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success("Item Is Removed From List. ");
	};

	const editItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});
		setItems(newItems);
		setLocalStorage(newItems);
	};

	return (
		<section className="section-center">
			<Form addItem={addItem} />
			<Items items={items} removeItem={removeItem} editItem={editItem} />
			<ToastContainer />
		</section>
	);
};

export default App;
