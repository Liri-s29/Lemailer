function formatDateTime(timeString) {
	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		timeZone: userTimeZone,
	};

	const dateTime = new Date(timeString);
	return dateTime.toLocaleString(undefined, options);
}

module.exports = formatDateTime;
