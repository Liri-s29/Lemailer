import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const redirectTimer = setTimeout(() => {
			navigate("/");
		}, 3000); // Redirect after 3 seconds

		return () => clearTimeout(redirectTimer);
	}, [navigate]);

	return (
		<div>
			<h1>404 - Not Found</h1>
			<p>The page you are looking for does not exist.</p>
			<p>Redirecting to the home page...</p>
		</div>
	);
};

export default NotFound;
