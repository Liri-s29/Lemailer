import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import formatDateTime from "../../utils/formatDateTime";
import { useCookies } from "react-cookie";
import getEmailStats from "../../services/fetchTrackingStatus";
import { clearMail } from "../../services/EmailHandler";

const Tracking = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
	const [tracking, setTracking] = useState([]);
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/");
	};

	useEffect(async () => {
		fetchData();
	}, []);

	async function fetchData() {
		const response = await getEmailStats(cookies.userData.userEmail);
		setTracking(response);
	}

	const Heading = ({ text, span }) => {
		return (
			<div class={`font-bold uppercase col-span-${span} border-2 border-solid border-black py-2 text-center`}>
				{text}
			</div>
		);
	};

	const RowIdx = ({ text, span }) => {
		return (
			<div
				class={`flex items-center justify-center col-span-${span} border-2 border-solid border-black py-2 text-center`}
			>
				{text}
			</div>
		);
	};

	const Row = ({ data }) => {
		console.log(data);
		const opensE = (opens) => {
			return (
				<div class="flex flex-col">
					{opens.map((open) => {
						return <div class="text-center">{formatDateTime(open)}</div>;
					})}
				</div>
			);
		};

		const openedE = (opens) => {
			return opens.length ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 m-auto text-green-600 shadow-md rounded-full shadow-black"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 m-auto text-red-600 shadow-md rounded-full shadow-black"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			);
		};

		const deleteE = (uuid) => {
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 cursor-pointer text-red-600 rounded-lg shadow-md hover:shadow-none hover:text-red-800 shadow-red-700 transition-all duration-100"
					onClick={async () => {
						const response = await clearMail(uuid);
						fetchData();
					}}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			);
		};

		return data.map((track) => {
			return (
				<div class="flex flex-row md:grid md:grid-cols-12">
					<RowIdx text={track.to} span={2} />
					<RowIdx text={track.subject} span={2} />
					<RowIdx text={formatDateTime(track.sentAt)} span={3} />
					<RowIdx text={openedE(track.opens)} span={1} />
					<RowIdx text={opensE(track.opens)} span={3} />
					<RowIdx text={deleteE(track.uuid)} span={1} />
				</div>
			);
		});
	};

	return (
		<div className="min-h-screen flex flex-col gap-5">
			<div className="grid grid-cols-4">
				<button
					onClick={handleNavigate}
					className="col-span-1 text-left self-start text-lg underline underline-offset-4 hover:text-gray-400"
				>
					{"<--"}{" "}
					<span class="hidden md:inline-block underline underline-offset-4 hover:text-gray-400">Back to Dashboard</span>
				</button>
				<h1 className="col-span-2 text-center justify-self-center flex-1 text-3xl font-extrabold uppercase">
					Email Tracking
				</h1>
				<div class="row-span-1" />
			</div>
			<div class="flex flex-col overflow-x-scroll">
				<div class="flex flex-row md:grid md:grid-cols-12 flex-nowrap">
					<Heading text="to" span={2} />
					<Heading text="Subject" span={2} />
					<Heading text="Sent At" span={3} />
					<Heading text="Opened" span={1} />
					<Heading text="Opened At" span={3} />
					<Heading text="Delete" span={1} />
				</div>
				{tracking.length ? <Row data={tracking} /> : <> </>}
			</div>
		</div>
	);
};

export default Tracking;
