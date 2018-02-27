import React, { Component } from 'react';
import { formateTime, checkEndTime } from '../helpers/Timer.js';
import { Timer } from './Timer';

export class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: this.props.timeLeft
		};
	}
	componentDidMount() {
		this.startCountDown();
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	setTimeleft() {
		if (this.state.timeLeft === null) {
			this.setState({
				timeLeft: checkEndTime()
			});
		}
	}

	startCountDown() {
		this.setTimeleft();
		this.timerID = setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick() {
		const newtimeLeft = this.state.timeLeft - 1;
		if (newtimeLeft >= 0) {
			this.setState({
				timeLeft: newtimeLeft
			});
			this.props.toggleDiscount(true);
		} else {
			clearInterval(this.timerID);
			this.props.toggleDiscount(false);
		}
	}

	render() {
		const time = this.state.timeLeft;

		return <Timer timer={formateTime(time)} />;
	}
}

Countdown.defaultProps = {
	timeLeft: null
};
