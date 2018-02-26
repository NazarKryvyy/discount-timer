import { TOGGLE_DISCOUNT } from '../actions';

export default function discountTimer(discount = false, action) {
	switch (action.type) {
		case TOGGLE_DISCOUNT:
			return Object.assign({}, discount, {
				discount: action.discount,
			});
		default:
			return discount;
	}
}
