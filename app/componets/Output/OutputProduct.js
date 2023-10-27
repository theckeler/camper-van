"use client";
import { OutputSub } from "./OutputSub";
import { CompileProduct } from "@/app/componets/CompileProduct";

export function OutputProduct({ titleBase, updateTotal }) {
	return titleBase.product ? (
		<CompileProduct titleBase={titleBase} updateTotal={updateTotal} />
	) : (
		<OutputSub products={titleBase} updateTotal={updateTotal} />
	);
}
