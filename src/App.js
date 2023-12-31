import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
// import Campaign from "./pages/Campaign";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsAndConditions from "./pages/TermsAndConditions";
import Tracking from "./pages/Tracking";
import In from "./Layouts/In";

function App() {
	const [credentials, setCredentials] = useState(null);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage credentials={credentials} setCredentials={setCredentials} />} />
				<Route path="/dashboard" element={<In />}>
					<Route index element={<Dashboard credentials={credentials} setCredentials={setCredentials} />} />
					<Route path="tracking" element={<Tracking />} />
				</Route>
				<Route path="/privacy-policy" element={<PrivacyPolicies />} />
				<Route path="/terms-of-service" element={<TermsAndConditions />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
