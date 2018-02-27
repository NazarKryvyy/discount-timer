import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../components/Button';
import ReactTestUtils from 'react-dom/test-utils';

jest.useFakeTimers();

test('Button will render if discount is true', () => {
	var countdown = ReactTestUtils.renderIntoDocument(
		<Button discount={true} />
	);
});

test('Button will not render if discount is false', () => {
	var countdown = ReactTestUtils.renderIntoDocument(
		<Button discount={false} />
	);

	expect(countdown).toBe(null);
});
