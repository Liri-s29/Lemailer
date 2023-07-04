import axios from "axios";

export async function sendFile(file, userData, attachment) {
	const formData = new FormData();
	formData.append("file", file);
	if (attachment) {
		formData.append("attachment", attachment);
	}
	formData.append("userEmail", userData.userEmail);
	try {
		const response = await axios.post("https://lemailer-backend.onrender.com/api/send-email", formData, {
		// const response = await axios.post("http://localhost:3001/api/send-email", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${userData.token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return "Error! Email not sent!";
	}
}

export async function clearMail(uuid) {
	try {
		const response = await axios.get(`http://localhost:3001/api/clear-mail/${uuid}`);
		return response.data;
	} catch (error) {
		console.log(error);
		return "Error! Email not cleared!";
	}
}
