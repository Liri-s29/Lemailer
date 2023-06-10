import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

function PrivacyPolicies() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/");
	};

	return (
		<div className="min-h-screen flex flex-col py-10 px-40 gap-5">
			<h1 className="text-center text-4xl font-extrabold  uppercase">Public Privacy Policy</h1>
			<button
				onClick={handleNavigate}
				className="w-1/6 text-left text-lg underline underline-offset-4 hover:text-gray-400"
			>
				{"<--"} Back to Lemailer
			</button>
			<p className="text-2xl font-bold uppercase">
				This Privacy Policy outlines how Lemailer collects, uses, and protects your personal information.
			</p>
			<h1 className="text-xl font-bold uppercase">1. Information We Collect</h1>
			<p className="text-lg text left text-justify">
				The only personal information we collect when you use our application is your Google Account Information, which
				is used for the Google Sign-In functionality.
			</p>
			<h1 className="text-xl font-bold uppercase">2. How We Use Your Information</h1>
			<p className="text-lg text left text-justify">
				We use your Google Account Information solely to enable your access to our services and to use the Google API
				for sending emails.
			</p>
			<h1 className="text-xl font-bold uppercase">3. Data Protection</h1>
			<p className="text-lg text left text-justify">
				We are committed to securing your data and keeping it confidential. We do everything in our power to prevent
				data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help
				us safeguard all the information we collect online.
			</p>
			<h1 className="text-xl font-bold uppercase">4. Your Rights</h1>
			<p className="text-lg text left text-justify">
				You have the right to access, correct, or delete your personal data. You can exercise these rights by contacting
				us at our email address.
			</p>
			<h1 className="text-xl font-bold uppercase">5. Updates to This Policy</h1>
			<p className="text-lg text left text-justify">
				We may update this Privacy Policy from time to time. Any changes will be posted on this page.
			</p>
			<Footer />
		</div>
	);
}

export default PrivacyPolicies;
