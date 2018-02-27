import React from 'react';
import ReactDOM from 'react-dom';
import { Countdown } from '../components/Countdown';
import ReactTestUtils from 'react-dom/test-utils';

jest.useFakeTimers();
test('Countdown renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Countdown timeLeft={1} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('Countdown will change state after 1 second', () => {
	var countdown = ReactTestUtils.renderIntoDocument(
		<Countdown timeLeft={1} />
	);
	countdown.startCountDown();

	setTimeout(() => {
		expect(countdown.state.timeLeft).toBe(0);
	}, 1001);
});
