"use client";
import { OutputSub } from "./OutputSub";
import { CompileProduct } from "@/app/componets/CompileProduct";

export function OutputProduct({ titleBase, handleChange, inputs }) {
	return titleBase.product ? (
		<CompileProduct
			titleBase={titleBase}
			handleChange={handleChange}
			inputs={inputs}
		/>
	) : (
		<OutputSub
			products={titleBase}
			handleChange={handleChange}
			inputs={inputs}
		/>
	);
}
