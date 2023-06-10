import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="py-10 text-center">
			<h1 className="font-bold text-xl mb-2">Made with ❤️ by Liri</h1>
			<div className="flex flex-row justify-center gap-3">
				<Link className="underline underline-offset-2 hover:text-gray-600" to="/privacy-policy">
					Privacy Policy
				</Link>
				<Link className="underline underline-offset-2 hover:text-gray-600" to="/terms-of-service">
					Terms of Service
				</Link>
			</div>
		</div>
	);
}

export default Footer;
