import { toast } from "react-toastify";

function SingleColor({ color, index }) {
	const { hex, weight } = color;

	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success("Color Copied To Clipboard. ");
			} catch (error) {
				toast.error("Failed To Copy Color To Clipboard. ");
			}
		} else {
			toast.error("Clipboard Is Not Available. ");
		}
	};

	return (
		<article
			className={index > 10 ? "color color-light" : "color"}
			style={{ background: `#${hex}`, margin: "1px" }}
			onClick={saveToClipboard}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
		</article>
	);
}

export default SingleColor;
