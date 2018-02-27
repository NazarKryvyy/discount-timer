import React from 'react';
import arrow from '../images/arrow.svg';
import PropTypes from 'prop-types';

export function Button(props) {
	const button = props.discount ? (
		<a href="/" className="discountLink">
			Let’s start <img src={arrow} alt="arrow" />
		</a>
	) : (
		''
	);
	return <div>{button}</div>;
}

Button.protoTypes = {
	discount: PropTypes.bool
};
