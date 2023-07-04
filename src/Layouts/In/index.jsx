import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Footer from "../../components/Footer";
import getUserEmail from "../../services/fetchUserEmail";
import Navbar from "../../components/Navbar";

function In(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
	const navigate = useNavigate();

	const getUserData = () => {
		return cookies.userData;
	};
	useEffect(() => {
		if (getUserData() == null) {
			navigate("/");
		}
	}, [cookies]);
	return (
		<div class="px-10">
			<Navbar setCredentials={props.setCredentials} />
			{getUserData() ? <Outlet /> : <></>}
		</div>
	);
}

export default In;
