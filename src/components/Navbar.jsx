import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import getUserEmail from "../services/fetchUserEmail";
import getEmailStats from "../services/fetchTrackingStatus";

function Navbar(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
	const navigate = useNavigate();
	const deleteToken = () => {
		removeCookie("userData", { path: "/" });
	};

	const signOut = () => {
		// props.setCredentials(null);
		deleteToken();
	};

	return (
		<nav className="h-14 flex flex-row justify-between  py-2">
			<h1
				className="text-3xl font-extrabold cursor-pointer"
				onClick={() => {
					navigate("/");
				}}
			>
				LEMAILER
			</h1>
			<div className="flex flex-row gap-5">
				<button
					className=" p-2 underline underline-offset-8 hover:font-bold hover:border-black rounded-lg  text-black "
					onClick={async () => {
						// const fetchTracking = await getEmailStats(cookies.userData.userEmail);
						// console.log(fetchTracking);
						navigate("/dashboard/tracking");
					}}
				>
					Tracking
				</button>
				<button
					onClick={signOut}
					className="bg-white self-center hover:text-red-500  border-2 p-2 border-black hover:border-red-500 hover:font-bold rounded-lg  text-black "
				>
					Logout
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
