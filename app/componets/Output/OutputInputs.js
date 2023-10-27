"use client";
import { Fragment } from "react";
import { CompileProduct } from "@/app/componets/CompileProduct";

export function OutputInputs({ inputs, updateTotal }) {
	const inputArray = inputs.radio ? inputs.radio : inputs.checkbox;
	const inputType = inputs.radio ? "radio" : "checkbox";

	return (
		<>
			{inputArray.map((input, i) => {
				return (
					<Fragment key={i}>
						<div className="p-1 mb-1 relative">
							<label
								className={`absolute top-0 left-0 w-full h-full z-10 border peer-checked:border-cyan-500 cursor-pointer`}
								htmlFor={input.product.replace(/\s/g, "-").toLowerCase()}
							/>
							<CompileProduct titleBase={input} updateTotal={updateTotal} />
						</div>
						{inputType === "radio" && i === 0 && (
							<div className="text-lg font-bold w-full text-center p-1 text-red-500">
								OR
							</div>
						)}
					</Fragment>
				);
			})}
		</>
	);
}
