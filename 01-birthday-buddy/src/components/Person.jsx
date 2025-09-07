function Person({ id, name, age, image, handleRemoveBirthday }) {
	return (
		<li className="my-6 flex items-center space-x-4">
			<img
				src={image}
				alt={`${name} image`}
				className="inline-block w-16 h-16 rounded-full"
			/>
			<div className="self-center w-52 text-left">
				<h4 className="font-roboto font-medium text-[17px] leading-[24px] tracking-[1px] capitalize">
					{name}
				</h4>
				<p className="font-roboto font-normal text-sm text-[#64748B] leading-[16px]">
					{age} years
				</p>
				<button
					type="button"
					className="h-7 mt-1 capitalize px-2 bg-[#D946EF] rounded font-sans font-normal text-white text-[13.33px] leading-[100%] tracking-[1px] text-center align-middle capitalize"
					onClick={() => handleRemoveBirthday(id)}
				>
					Remove Birthday
				</button>
			</div>
		</li>
	);
}

export default Person;
