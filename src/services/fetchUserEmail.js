import axios from "axios";

const getUserEmail = async (accessToken) => {
	try {
		const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		const email = response.data.email;
		return email;
	} catch (error) {
		console.error("Error retrieving user email:", error.message);
		throw error;
	}
};

export default getUserEmail;
