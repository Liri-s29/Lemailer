import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

function TermsAndConditions() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/");
	};

	return (
		<div className="min-h-screen flex flex-col py-10 px-40 gap-5">
			<h1 className="text-center text-4xl font-extrabold  uppercase">Terms of Service</h1>
			<button
				onClick={handleNavigate}
				className="w-1/6 text-left text-lg underline underline-offset-4 hover:text-gray-400"
			>
				{"<--"} Back to Lemailer
			</button>
			<p className="text-2xl font-bold uppercase">These Terms of Service govern your use of Lemailer's services.</p>
			<h1 className="text-xl font-bold uppercase">1. Acceptance of Terms</h1>
			<p className="text-lg text left text-justify">
				By using our application, you agree to these Terms of Service. If you don’t agree to them, do not use the
				application.
			</p>
			<h1 className="text-xl font-bold uppercase">2. Use of the Service</h1>
			<p className="text-lg text left text-justify">
				You agree not to misuse our services. For example, do not interfere with our services or try to access them
				using a method other than the interface and the instructions that we provide.
			</p>
			<h1 className="text-xl font-bold uppercase">3. User Responsibility</h1>
			<p className="text-lg text left text-justify">
				You are responsible for your use of the service and any content you provide, including compliance with
				applicable laws, rules, and regulations.
			</p>
			<h1 className="text-xl font-bold uppercase">4. Intellectual Property</h1>
			<p className="text-lg text left text-justify">
				Our application and all related graphics, user interfaces, visual interfaces, photographs, trademarks, logos,
				sounds, music, artwork, and computer code, including but not limited to the design, structure, selection,
				coordination, expression, "look and feel," and arrangement of such content, contained on the application is
				owned, controlled, or licensed by or to us, and is protected by trade dress, copyright, patent, and trademark
				laws, and various other intellectual property rights and unfair competition laws.
			</p>
			<h1 className="text-xl font-bold uppercase">5. Changes to Terms</h1>
			<p className="text-lg text left text-justify">
				We may modify these terms or any additional terms that apply to the service at any time.
			</p>
			<Footer />
		</div>
	);
}

export default TermsAndConditions;
