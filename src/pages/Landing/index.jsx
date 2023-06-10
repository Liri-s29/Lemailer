import React, { useEffect } from "react";
import { GoogleLogin, hasGrantedAllScopesGoogle, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function LandingPage(props) {
	const [cookies, setCookie] = useCookies(["token"]);
	const navigate = useNavigate();

	const getToken = () => {
		return cookies.token;
	};

	useEffect(() => {
		if (getToken()) {
			navigate("/dashboard");
		}
		// if (props.credentials) {
		// 	navigate("/dashboard");
		// }
	}, [props.credentials, navigate, cookies]);

	const setToken = (token) => {
		const expirationDate = new Date();
		expirationDate.setTime(expirationDate.getTime() + 3550 * 1000); // Set the expiry to 3550 seconds from now

		setCookie("token", token, { path: "/", expires: expirationDate });
	};

	const login = useGoogleLogin({
		onSuccess: (response) => {
			const hasAccess = hasGrantedAllScopesGoogle(response, "https://www.googleapis.com/auth/gmail.send");
			console.log(hasAccess);

			if (response) {
				// props.setCredentials(response);
				setToken(response.access_token);
			}
		},
		// flow: "auth-code",
		onError: () => props.setCredentials(null),
		scope: "https://www.googleapis.com/auth/gmail.send",
	});

	return (
		<div class="flex flex-col justify-center align-middle w-full min-h-screen text-center gap-3">
			<h1 class="text-3xl font-extrabold ">LEMAILER - v1</h1>
			<p className="text-xl font-bold">CSV-based Mass mailer by liri</p>
			<button
				class="bg-white w-3/6 md:w-1/6  self-center hover:text-blue-500  border-2 p-2 border-black hover:border-blue-500 hover:font-bold rounded-lg  text-black"
				type="button"
				onClick={() => login()}
			>
				Sign in with Google
			</button>
		</div>
	);
}

export default LandingPage;