import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Footer from "../../components/Footer";
import getUserEmail from "../../services/fetchUserEmail";

function LandingPage(props) {
	const [cookies, setCookie] = useCookies(["userData"]);
	const navigate = useNavigate();

	const getUserData = () => {
		return cookies.userData;
	};

	useEffect(() => {
		if (getUserData()) {
			navigate("/dashboard");
		}
		// if (props.credentials) {
		// 	navigate("/dashboard");
		// }
	}, [props.credentials, navigate, cookies]);

	const setUserData = async (token) => {
		const expirationDate = new Date();
		expirationDate.setTime(expirationDate.getTime() + 3550 * 1000); // Set the expiry to 3550 seconds from now
		const userEmail = await getUserEmail(token);
		const userData = { token, userEmail };
		setCookie("userData", userData, { path: "/", expires: expirationDate });
	};

	const login = useGoogleLogin({
		onSuccess: (response) => {
			if (response) {
				// props.setCredentials(response);
				setUserData(response.access_token);
			}
		},
		// flow: "auth-code",
		onError: () => props.setCredentials(null),
		scope: "https://www.googleapis.com/auth/gmail.send",
	});

	return (
		<div className="flex flex-col justify-between align-middle w-full min-h-screen text-center gap-3">
			<div />
			<div className="gap-3 flex flex-col ">
				<h1 className="text-3xl font-extrabold ">LEMAILER - v1</h1>
				<p className="text-xl font-bold">CSV - based Mass emailer </p>
				<button
					className="bg-white w-3/6 md:w-1/6  self-center hover:text-blue-500  border-2 p-2 border-black hover:border-blue-500 hover:font-bold rounded-lg  text-black"
					type="button"
					onClick={() => login()}
				>
					Sign in with Google
				</button>
			</div>
			<Footer />
		</div>
	);
}

export default LandingPage;
