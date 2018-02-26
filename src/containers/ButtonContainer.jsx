import { connect } from 'react-redux';
import { Button } from '../components/Button';

function mapStateToProps(state) {
	return {
		discount: state.discount,
	};
}

const ButtonContainer = connect(mapStateToProps)(Button);

export default ButtonContainer;
