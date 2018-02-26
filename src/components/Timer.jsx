import React from 'react';


export function Timer(props) {
	const { timer } = props;
	return (
		<div className="timer-wrapper">
			<div className="timeRect">{timer.hours}</div>
			<div className="timeRect">{timer.minutes}</div>
			<div className="timeRect">{timer.seconds}</div>
		</div>
	);
}
