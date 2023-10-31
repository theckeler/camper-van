"use client";
export function OutputPrice({ price, multiplier = 1 }) {
	const total = price * multiplier;
	// updateTotal(total);
	return price > 0 ? `$${total}` : "";
}
