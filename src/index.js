import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./tailwind.css";

ReactDOM.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="921651746161-n9e5ijh5rgcrh2fjojlka2f2goq8lhlf.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
