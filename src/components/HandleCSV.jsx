import React, { useState } from "react";

function CSVUpload(props) {
	const [tsvData, setTSVData] = useState([]);
	const [headers, setHeaders] = useState([]);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		props.setRes("");
		props.setSelectedFile(file);
		props.setSelectedAttachment(null);
		const reader = new FileReader();

		reader.onload = (e) => {
			const contents = e.target.result;
			const rows = contents.split("\n");
			const headers = rows[0].split("\t");
			const data = rows.slice(1).map((row) => row.split("\t"));

			setHeaders(headers);
			setTSVData(data);
		};

		reader.readAsText(file);
	};

	const handleAttachmentUpload = (event) => {
		const file = event.target.files[0];
		props.setSelectedAttachment(file);
	};

	return (
		<div className="justify-center flex flex-col align-middle gap-10">
			<input
				type="file"
				accept=".tsv"
				onChange={handleFileUpload}
				className="block self-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xl file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
			/>

			{props.selectedFile != null && (
				<>
					<h1 className=" text-center text-2xl underline underline-offset-4">Select Attachment</h1>
					<input
						type="file"
						accept="*"
						onChange={handleAttachmentUpload}
						className="block self-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xl file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
					/>
					<h1 className="font-bold text-center text-2xl uppercase underline underline-offset-4">Preview</h1>
					<table style={{ borderCollapse: "collapse" }} className="overflow-x-auto block whitespace-normal">
						<thead>
							<tr>
								{headers.map((header, index) => (
									<th key={index} style={{ padding: "8px" }} className="uppercase">
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="overflow-x-scroll">
							{tsvData.map((row, index) => (
								<tr key={index}>
									{row.map((cell, cellIndex) => (
										<td
											key={cellIndex}
											className="px-4 py-2 whitespace-break-spaces"
											style={{ padding: "8px", border: "1px solid #ddd", minWidth: "200px" }}
										>
											{cell}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
}

export default CSVUpload;
