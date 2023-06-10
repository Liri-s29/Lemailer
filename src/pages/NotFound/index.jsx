import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	const [timer, setTimer] = useState(5);

	useEffect(() => {
		const redirectTimer = setTimeout(() => {
			navigate("/");
		}, 5000); // Redirect after 3 seconds
		const interval = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);
		return () => {
			clearTimeout(redirectTimer);
			clearInterval(interval);
		};
	}, [navigate]);

	return (
		<div className="min-h-screen flex flex-col  gap-10 justify-center">
			<h1 className="text-center text-4xl font-extrabold uppercase">404 - NOT FOUND</h1>
			<p className="text-2xl font-bold uppercase text-center">The page you are looking for does not exist.</p>
			<p className="text-xl font-bold text-center">Redirecting to the home page...in {timer}</p>
		</div>
	);
};

export default NotFound;
