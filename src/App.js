import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
// import Campaign from "./pages/Campaign";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
	const [credentials, setCredentials] = useState(null);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage credentials={credentials} setCredentials={setCredentials} />} />
				<Route path="/dashboard" element={<Dashboard credentials={credentials} setCredentials={setCredentials} />} />
				<Route path="*" component={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
