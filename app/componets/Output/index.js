"use client";
import { OutputProduct } from "./OutputProduct";
import { H2 } from "../H2";

export function OutputMain({ title, titleBase, className, updateTotal }) {
	return (
		<>
			<li className={className}>
				<H2 title={title} />
			</li>
			<li>
				<OutputProduct titleBase={titleBase} updateTotal={updateTotal} />
			</li>
		</>
	);
}
