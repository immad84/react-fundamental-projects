function Button({ handleClearAll }) {
	return (
		<button
			type="button"
			className="w-full h-7 my-4 capitalize px-10 bg-[#D946EF] rounded font-sans font-normal text-white text-[13.33px] leading-[100%] tracking-[1px] text-center align-middle capitalize"
			onClick={handleClearAll}
		>
			clear all
		</button>
	);
}

export default Button;
