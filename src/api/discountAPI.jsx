export function setTime(endTime) {
	localStorage.setItem('endTime', JSON.stringify(endTime));
}
export function getTime() {
	var endTime = localStorage.getItem('endTime');

	return JSON.parse(endTime);
}
