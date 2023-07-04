import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import CSVUpload from "../../components/HandleCSV";
import { sendFile } from "../../services/EmailHandler";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Dashboard(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
	const [selectedFile, setSelectedFile] = useState(null);
	const [selectedAttachment, setSelectedAttachment] = useState(false);
	const [res, setRes] = useState("");

	const getUserData = () => {
		return cookies.userData;
	};

	return (
		<div className="flex flex-col  min-h-screen gap-10">
			<div className="flex flex-col gap-10 ">
				{selectedFile != null && (
					<div className="flex flex-col justify-end">
						<button
							className="bg-green-500 self-end hover:bg-green-400  border-2 p-2 border-black hover:border-black rounded-lg  text-black "
							onClick={async () => {
								setRes("Please wait until the emails are sent...");
								const response = await sendFile(selectedFile, getUserData(), selectedAttachment);
								// const response = await new Promise((resolve, reject) => {
								// 	setTimeout(() => {
								// 		resolve("Emails sent successfully");
								// 	}, 3000);
								// });
								setRes(response);
							}}
						>
							Send Email
						</button>
						<h1 className="text-lg self-end">{res}</h1>
					</div>
				)}

				<h1 className="text-3xl text-center">Select a {selectedFile && "new"} file from your directory</h1>
				<CSVUpload
					setSelectedFile={setSelectedFile}
					selectedFile={selectedFile}
					setRes={setRes}
					setSelectedAttachment={setSelectedAttachment}
				/>
			</div>
		</div>
	);
}

export default Dashboard;
