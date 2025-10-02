import { FaTimes } from "react-icons/fa";
import { useContextProvider } from "../../context/AppContext";

function Model() {
	const { closeModal, isModalOpen } = useContextProvider();
	return (
		<>
			<div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
				<div className="modal-container">
					<h5>Login</h5>
					<form className="form">
						<div className="form-row">
							<label htmlFor="name" className="form-label">
								Name
							</label>

							<input type="text" name="name" id="name" className="form-input" />
						</div>
						<div className="form-row">
							<label htmlFor="email" className="form-label">
								Email
							</label>

							<input type="email" name="email" id="email" className="form-input" />
						</div>
					</form>
					<button type="button" className="close-modal-btn" onClick={closeModal}>
						<FaTimes />
					</button>
				</div>
			</div>
		</>
	);
}

export default Model;
