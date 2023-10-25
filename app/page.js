"use client";
import { Fragment } from "react";
import DataVan from "@/data/van";

export default function Home() {
	function unCamelCase(str) {
		return (
			str
				// insert a space between lower & upper
				.replace(/([a-z])([A-Z])/g, "$1 $2")
				// space before last upper in a sequence followed by lower
				.replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
				// uppercase the first character
				.replace(/^./, function (str) {
					return str.toUpperCase();
				})
		);
	}

	const compileProduct = ({ brand, product, href, price }) => {
		return `
		<div class="flex items-center gap-1 p-1">
				<span class="p-3 border rounded">${brand} ${product}</span>
				<a href="${href}" target="_new" class="bg-white fill-blue-200 h-12 w-12 p-3 border rounded hover:bg-red-600 hover:fill-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
				</a>
		</div>`;
	};

	const compileSub = (titleBase, subtitle) => {
		return `<div class="mb-4">
			<div class="font-bold">${unCamelCase(subtitle)}</div>
			<span>${compileProduct(titleBase[subtitle])}</span>
		</div>`;
	};

	const compileRadio = (subtitle, product, i) => {
		return `
			<div class="flex">
				<input type="radio" id="${
					product.product
				}" name="${subtitle}" value="" class="mr-2 hidden peer" ${
			i === 0 ? "checked" : ""
		}>
				<label class="cursor-pointer peer-checked:bg-blue-100" for="${
					product.product
				}">${compileProduct(product)}</label>
			</div>
		`;
	};

	const compileCheckBox = (subtitle, product, i) => {
		console.log("product", product.product);
		return `
			<div class="flex">
				<input type="checkbox" id="${
					product.product
				}" name="${subtitle}" value="" class="mr-2 hidden peer" checked>
				<label class="cursor-pointer peer-checked:bg-blue-100" for="${
					product.product
				}">${compileProduct(product)}</label>
			</div>
		`;
	};

	return (
		<main className="flex items-center flex-col p-10">
			<h1 className="text-2xl text-sky-800 mb-2 font-extrabold">
				144 Sprinter AWD Van:
			</h1>

			<h2 className="text-xl text-emerald-800 border-b mb-2 pb-2 font-bold">
				Exterior:
			</h2>
			<ul className="grid grid-cols-[200px_1fr_100px] gap-4">
				<li>Type</li>
				<li>Product</li>
				<li className="text-right">Price</li>
				{Object.keys(DataVan.interior).map((title, i) => {
					const titleBase = DataVan.interior[title];
					let lineInput = "";
					let linePrice = null;

					if (titleBase.constructor.name === "Object") {
						if (titleBase.product) {
							lineInput = compileProduct(titleBase);
							linePrice = titleBase.price;
						} else {
							Object.keys(titleBase).map((subtitle, i) => {
								if (titleBase[subtitle].product) {
									lineInput += compileSub(titleBase, subtitle);
									linePrice = titleBase[subtitle].price;
								} else if (titleBase[subtitle].constructor.name === "Object") {
									if (titleBase[subtitle].radio) {
										lineInput += `<div class="font-bold">${unCamelCase(
											subtitle
										)}</div>`;
										titleBase[subtitle].radio.forEach(function (
											productArray,
											i
										) {
											lineInput += compileRadio(subtitle, productArray, i);
											console.log("productArray:", productArray);
											linePrice = productArray.price;
										});
									} else if (titleBase[subtitle].checkbox) {
										lineInput += `<div class="font-bold">${unCamelCase(
											subtitle
										)}</div>`;
										titleBase[subtitle].checkbox.forEach(function (
											productArray,
											i
										) {
											lineInput += compileCheckBox(subtitle, productArray, i);
											linePrice = productArray.price;
										});
									}
									lineInput = `<div class="mb-2">${lineInput}</div>`;
								}
							});
						}
					}

					return (
						<Fragment key={i}>
							<li className="">
								<h2 className="text-lg text-teal-800 font-semibold p-3">
									{unCamelCase(title)}:
								</h2>
							</li>
							<li
								className=""
								dangerouslySetInnerHTML={{
									__html: lineInput,
								}}></li>
							{linePrice > 0 ? (
								<li className="text-right">${linePrice}</li>
							) : (
								<li></li>
							)}
						</Fragment>
					);
				})}
			</ul>
		</main>
	);
}
