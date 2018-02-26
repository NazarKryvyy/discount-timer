import { connect } from 'react-redux';
import { Countdown } from '../components/Countdown';
import { toggleDiscount } from '../actions';

function mapDispatchToProps(dispatch) {
	return {
		toggleDiscount: discount => dispatch(toggleDiscount(discount)),
	};
}

const CountdownContainer = connect(null, mapDispatchToProps)(Countdown);

export default CountdownContainer;
