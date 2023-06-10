import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);

	const deleteToken = () => {
		removeCookie("token", { path: "/" });
	};

	const signOut = () => {
		// props.setCredentials(null);
		deleteToken();
	};

	return (
		<nav className="h-14 flex flex-row justify-between  py-2">
			<h1 className="text-3xl font-extrabold">LEMAILER</h1>
			<button
				onClick={signOut}
				className="bg-white self-center hover:text-red-500  border-2 p-2 border-black hover:border-red-500 hover:font-bold rounded-lg  text-black "
			>
				Logout
			</button>
		</nav>
	);
}

export default Navbar;
