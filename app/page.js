"use client";
import { Fragment } from "react";
import DataVan from "@/data/van";

export default function Home() {
	//console.log("DataVan: ", DataVan);

	// for (const [key, value] of Object.entries(DataVan)) {
	// 	if (key === "exterior") {
	// 		console.log(`${key}: ${value}`);
	// 	}
	// }

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
		return `<a href="${href}" target="_new" class="underline">${brand} ${product}</a>`;
	};

	return (
		<main className="flex flex-col p-10">
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
					let lineInput = null;

					switch (titleBase.constructor.name) {
						case "Object":
							if (titleBase.product) {
								lineInput = compileProduct(titleBase);
							} else {
								Object.keys(titleBase).map((subtitle, i) => {
									//console.log(object);
									lineInput = unCamelCase(subtitle);
								});
							}
							break;

						case "Array":
							//console.log("Array");
							lineInput = "OR";

							break;

						default:
					}

					return (
						<Fragment key={i}>
							<li className="">
								<h2 className="text-lg text-teal-800 font-semibold">
									{unCamelCase(title)}:
								</h2>
							</li>
							<li
								className="text-red-800"
								dangerouslySetInnerHTML={{
									__html: lineInput,
								}}></li>
							<li className="text-right">$00</li>
						</Fragment>
					);
				})}
			</ul>
		</main>
	);
}
