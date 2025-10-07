import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { SidebarContextProvider } from "./context/SidebarContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<SidebarContextProvider>
		<App />
	</SidebarContextProvider>
);
