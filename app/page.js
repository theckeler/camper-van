"use client";
import { Fragment, useState, useEffect } from "react";
import DataVan from "@/data/van";

function OutputInputs({ inputs, subtitle }) {
	const inputArray = inputs.radio ? inputs.radio : inputs.checkbox;
	const inputType = inputs.radio ? "radio" : "checkbox";

	return (
		<>
			{inputArray.map((input, i) => {
				return (
					<Fragment key={i}>
						<div className="p-1 mb-1 relative">
							{/* <input
								className={`peer mr-2 hidden`}
								id={input.product}
								name={input.product}
								value={input.product}
								type={inputType}
								checked={i === 0 || inputType === "checkbox" ? true : false}
							/> */}
							<label
								className={`absolute top-0 left-0 w-full h-full z-10 border peer-checked:border-cyan-500 cursor-pointer`}
								htmlFor={input.product}
							/>
							<CompileProduct {...input} />
						</div>
						{inputType === "radio" && i === 0 && (
							<div className="text-xs w-full text-center p-1 text-red-500">
								OR
							</div>
						)}
					</Fragment>
				);
			})}
		</>
	);
}

function OutputSub({ products }) {
	return (
		<ul className="grid grid-cols-[200px_1fr]">
			{Object.keys(products).map((title, i) => {
				return products[title].product ? (
					<OutputMain title={title} titleBase={products[title]} key={i} />
				) : (
					<Fragment key={i}>
						<li>
							<H2 title={title} />
						</li>
						<li>
							<OutputInputs inputs={products[title]} subtitle={title} />
						</li>
					</Fragment>
				);
			})}
		</ul>
	);
}

function OutputPrice({ price }) {
	//StateOfThings(price);
	//setTotal(total + price);
	return price > 0 ? `$${price}` : "";
}

function OutputProduct({ titleBase }) {
	return titleBase.product ? (
		<CompileProduct {...titleBase} />
	) : (
		<OutputSub products={titleBase} />
	);
}

function OutputMain({ title, titleBase, className }) {
	return (
		<>
			<li className={className}>
				<H2 title={title} />
			</li>
			<li>
				<OutputProduct titleBase={titleBase} />
			</li>
		</>
	);
}

function H2({ title }) {
	return (
		<h2 className="text-lg text-teal-800 font-semibold p-3">
			{unCamelCase(title)}:
		</h2>
	);
}

function CompileProduct({ brand, product, href, price }) {
	return (
		<ul className="grid grid-cols-[1fr_48px_200px] items-center gap-1 p-1">
			<li>
				<span className="p-3  rounded w-full block">
					{brand} {product}
				</span>
			</li>
			<li>
				<a
					href={href}
					target="_new"
					className="bg-white fill-blue-200 h-12 w-12 p-3 border rounded hover:bg-red-600 hover:fill-white block relative z-20">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
						<path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
					</svg>
				</a>
			</li>
			<li className="text-right">
				<OutputPrice price={price} />
			</li>
		</ul>
	);
}

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

export default function Home() {
	/////
	// const [total, setTotal] = useState(0);
	// useEffect(() => {
	// 	console.log(total);
	// }, [total]);

	// useEffect(() => {
	// 	console.log(total);
	// }, [total]);

	const priceChange = (price) => {
		setTotal(price);
	};
	/////

	return (
		<main className="flex items-center flex-col p-10 w-2xl">
			<h1 className="text-2xl text-sky-800 mb-2 font-extrabold">
				144 Sprinter AWD Van:
			</h1>

			<h2 className="text-xl text-emerald-800 border-b mb-2 pb-2 font-bold">
				Exterior:
			</h2>
			<ul className="grid grid-cols-[200px_1fr] gap-4 border p-4 w-full">
				{Object.keys(DataVan.exterior).map((title, i) => {
					return (
						<OutputMain
							title={title}
							titleBase={DataVan.exterior[title]}
							key={i}
							className="bg-slate-200"
						/>
					);
				})}
			</ul>

			<h2 className="text-xl text-emerald-800 border-b mb-2 pb-2 font-bold">
				Exterior:
			</h2>
			<ul className="grid grid-cols-[200px_1fr] gap-4 border p-4 w-full">
				{Object.keys(DataVan.interior).map((title, i) => {
					return (
						<OutputMain
							title={title}
							titleBase={DataVan.interior[title]}
							key={i}
							className="bg-slate-200"
						/>
					);
				})}
			</ul>
		</main>
	);
}
