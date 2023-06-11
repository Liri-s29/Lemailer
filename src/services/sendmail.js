import axios from "axios";

async function sendFile(file, token, attachment) {
	const formData = new FormData();
	formData.append("file", file);
	if (attachment) {
		formData.append("attachment", attachment);
	}
	try {
		const response = await axios.post("https://lemailer-backend.onrender.com/api/send-email", formData, {
			// const response = await axios.post("http://localhost:3001/api/send-email", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return "Error! Email not sent!"
	}
}

export default sendFile;
