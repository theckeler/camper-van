"use client";
import { useState, useEffect } from "react";
import { OutputMain } from "./componets/Output/";
import { DataVan } from "./page";

export default function Home() {
	const [inputs, setInputs] = useState({});
	const [orderTotal, setOrderTotal] = useState(0);

	function updateTotal(price) {
		setTotal(total + price);
	}

	useEffect(() => {
		let temp = [];
		let total = 0;
		getKeysLoop(DataVan);
		function getKeysLoop(obj) {
			Object.keys(obj).map((k, i, array) => {
				if (typeof obj[k] == "object" && !obj[k].length) {
					getKeysLoop(obj[k]);
				} else if (i === 0) {
					if (k == "radio" || k == "checkbox") {
						obj[k].forEach((items, i) => {
							temp.push({
								...items,
								inputType: k,
								checked:
									(i == 0 && k == "radio") || k == "checkbox" ? true : false,
							});
							total =
								(i == 0 && k == "radio") || k == "checkbox"
									? total + items.price
									: total;
						});
					} else {
						temp.push({ ...obj, inputType: "checkbox", checked: true });
						total = total + obj.price;
					}
				}
			});
		}
		setOrderTotal(total);
		setInputs({ test: temp });
	}, []);

	const handleChange = (e, checked) => {
		const changeInput = inputs;
		let total = 0;

		if (e.currentTarget.type === "radio") {
			document
				.querySelectorAll(
					`#inputs-container input[name="${e.currentTarget.name}"]`
				)
				.forEach((input, i) => {
					changeInput.test[input.value] = {
						...changeInput.test[input.value],
						checked: false,
					};
					changeInput.test[e.currentTarget.value] = {
						...changeInput.test[e.currentTarget.value],
						checked: true,
					};
				});
		} else {
			changeInput.test[e.currentTarget.value] = {
				...changeInput.test[e.currentTarget.value],
				checked: !checked,
			};
		}

		setInputs({ test: changeInput.test });
	};

	const ulCSS = "grid grid-cols-[minmax(160px,_220px)_1fr] gap-2 w-full";

	return (
		<main className="max-w-screen-2xl mx-auto p-2 lg:p-8">
			<h1 className="text-2xl text-blue-900 mb-4 font-extrabold col-span-2 text-center">
				2023 SPRINTER 144 HIGH ROOF AWD BUILD:
			</h1>
			<ul className="grid grid-cols-[200px_1fr] items-start gap-1 p-10 max-w-screen-2xl mx-auto 2xl:p-2 mb-8">
				<li className="sticky top-0 p-2">
					<div className="border p-4">
						<div>Total: ${orderTotal}</div>
						<div className="text-xs mt-2" id="inputs-container">
							{inputs.test &&
								inputs.test.map((input, i) => {
									return (
										<div key={i} className="flex gap-1">
											<input
												className={`peer/${input.product
													.replace(/\s/g, "-")
													.toLowerCase()} mr-2`}
												id={input.product.replace(/\s/g, "-").toLowerCase()}
												name={
													input.inputType === "radio"
														? input.group
														: input.product
												}
												value={i}
												type={input.inputType}
												checked={input.checked}
												onChange={(e) => handleChange(e, input.checked)}
											/>
											<label
												className="truncate overflow-hidden"
												htmlFor={input.product
													.replace(/\s/g, "-")
													.toLowerCase()}>
												{input.product}
											</label>
										</div>
									);
								})}
						</div>
					</div>
				</li>
				<li className="p-2">
					<div className="border p-4">
						<h2 className="text-xl text-blue-800 mb-2 font-bold">Exterior:</h2>
						<ul className={ulCSS}>
							{Object.keys(DataVan.exterior).map((title, i) => {
								return (
									<OutputMain
										title={title}
										titleBase={DataVan.exterior[title]}
										key={i}
										className="bg-blue-800 text-white"
										updateTotal={updateTotal}
									/>
								);
							})}
						</ul>

						<h2 className="text-xl text-blue-800 my-4 font-bold">Interior:</h2>
						<ul className={ulCSS}>
							{Object.keys(DataVan.interior).map((title, i) => {
								return (
									<OutputMain
										title={title}
										titleBase={DataVan.interior[title]}
										key={i}
										className="bg-blue-800 text-white rounded"
										updateTotal={updateTotal}
									/>
								);
							})}
						</ul>
					</div>
				</li>
			</ul>
		</main>
	);
}
