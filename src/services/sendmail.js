import axios from "axios";

async function sendFile(file, token) {
	const formData = new FormData();
	formData.append("file", file);
	try {
		const response = await axios.post("http://localhost:3009/send-mail", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {}
}

export default sendFile;
