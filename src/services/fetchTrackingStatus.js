import axios from "axios";

const getEmailStats = async (userEmail) => {
	try {
		const response = await axios.get("https://lemailer-backend.onrender.com/api/email-stats", {
		// const response = await axios.get("http://localhost:3001/api/email-stats", {
			params: {
				userEmail: userEmail, // Add userEmail as a query parameter
			},
		});

		const data = response.data;
		return data;
	} catch (error) {
		// console.error("Error retrieving email stats:", error.message);
		throw error;
	}
};

export default getEmailStats;
