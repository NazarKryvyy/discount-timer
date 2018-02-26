import { setTime, getTime } from '../api/discountAPI';
const DISCOUNT_TIME = 100;

export function formateTime(time) {
	var seconds = time % 60;
	var minutes = Math.floor(time / 60) % 60;
	var hours = Math.floor(time / 3600);

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}
	var timer = {
		seconds,
		minutes,
		hours,
	};

	return timer;
}

export function checkEndTime() {
	const startTime = parseInt(Date.now() / 1000, 10);
	let endTime = getTime();
	let timeLeft = 0;
	if (endTime > startTime) {
		timeLeft = endTime - startTime;
	} else if (endTime === null) {
		endTime = startTime + DISCOUNT_TIME;
		timeLeft = endTime - startTime;
		setTime(endTime);
	}
	return timeLeft;
}
