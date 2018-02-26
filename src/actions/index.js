export const TOGGLE_DISCOUNT = 'TOGGLE_DISCOUNT';

export function toggleDiscount(discount) {
	return {
		type: TOGGLE_DISCOUNT,
		discount,
	};
}
