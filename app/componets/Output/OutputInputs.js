"use client";
import { Fragment } from "react";
import { CompileProduct } from "@/app/componets/CompileProduct";

export function OutputInputs({ inputsData, handleChange, inputs }) {
	const inputArray = inputsData.radio ? inputsData.radio : inputsData.checkbox;
	const inputType = inputsData.radio ? "radio" : "checkbox";

	return (
		<>
			{inputArray.map((inputData, i) => {
				return (
					<Fragment key={i}>
						<div className="p-1 mb-1 relative">
							<CompileProduct
								titleBase={inputData}
								inputType={inputType}
								i={i}
								handleChange={handleChange}
								inputs={inputs}
							/>
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
