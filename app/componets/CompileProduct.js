"use client";
import { useState, useEffect } from "react";
import { OutputPrice } from "./Output/OutputPrice";

export function CompileProduct({
	titleBase,
	handleChange,
	inputs,
	inputType = "checkbox",
	i = 0,
}) {
	const id = titleBase.product.replace(/\s/g, "-").toLowerCase();

	// useEffect(() => {
	// 	const checked = document.querySelector(`#${id}`);
	// 	console.log(id);
	// }, [id]);

	console.log(i);

	return (
		<div className="p-1 mb-1 relative product-list">
			<label
				className={`absolute top-0 left-0 w-full h-full z-10 border hover:border-cyan-500`}
				htmlFor={id}
				onClick={(e) => {
					//handleChange;
					const productChecked =
						e.target.parentElement.querySelector(".product-checked");
					console.log(productChecked.classList.contains("hidden"));

					productChecked.classList.contains("hidden")
						? productChecked.classList.remove("hidden")
						: productChecked.classList.add("hidden");
				}}
			/>
			<ul className="grid grid-cols-[48px_minmax(0,_1fr)_48px_minmax(60px,_80px)_minmax(60px,_80px)] items-center gap-1 p-1 w-full">
				<li className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="bg-white fill-blue-300 h-12 w-12 p-2 block relative z-20">
						<path d="M21.2 8.1c-.5-1.2-1.2-2.3-2.1-3.2-.9-.9-2-1.6-3.2-2.1-1.2-.5-2.5-.8-3.9-.8s-2.7.3-3.9.8C6.9 3.3 5.8 4 4.9 4.9c-.9.9-1.6 2-2.1 3.2C2.3 9.3 2 10.6 2 12s.3 2.7.8 3.9c.5 1.2 1.2 2.3 2.1 3.2.9.9 2 1.6 3.2 2.1 1.2.5 2.5.8 3.9.8s2.7-.3 3.9-.8c1.2-.5 2.3-1.2 3.2-2.1.9-.9 1.6-2 2.1-3.2.5-1.2.8-2.5.8-3.9s-.3-2.7-.8-3.9zm-3.5 9.6C16.1 19.2 14.2 20 12 20s-4.1-.8-5.7-2.3S4 14.2 4 12s.8-4.1 2.3-5.7S9.8 4 12 4s4.1.8 5.7 2.3S20 9.8 20 12s-.8 4.1-2.3 5.7z" />
						<path
							d="m10.6 16.6 7-7-1.4-1.5-5.6 5.7-2.8-2.9-1.5 1.4z"
							className="product-checked"
						/>
					</svg>
				</li>
				<li className="">
					<span className="p-3 rounded w-full block truncate overflow-hidden text-sm md:text-base">
						{titleBase.brand} {titleBase.product}{" "}
						{titleBase.multiplier > 0 && `(X${titleBase.multiplier})`}
					</span>
				</li>
				<li className="">
					{titleBase.href && (
						<a
							href={titleBase.href}
							target="_new"
							className="bg-white fill-blue-200 h-12 w-12 p-3 border rounded hover:bg-red-600 hover:fill-white block relative z-20">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
								<path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
							</svg>
						</a>
					)}
				</li>
				{titleBase.note ? (
					<li className="">
						<button
							className="bg-white fill-blue-200 h-12 w-12 p-3 border rounded hover:bg-red-600 hover:fill-white block relative z-20"
							onClick={(e) => {
								console.log(
									e.currentTarget
										.closest(".product-list")
										.querySelector(".note-container")
								);

								e.currentTarget
									.closest(".product-list")
									.querySelector(".note-container")
									.classList.toggle("hidden");
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
								<path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
							</svg>
						</button>
					</li>
				) : (
					<li></li>
				)}
				<li className="text-right">
					<OutputPrice
						price={titleBase.price}
						multiplier={titleBase.multiplier}
					/>
				</li>
			</ul>
			<div className="note-container p-4 hidden">
				<h2 className="font-bold mb-1 pb-1 border-b">Notes:</h2>
				<div
					className="p-1"
					dangerouslySetInnerHTML={{ __html: titleBase.note }}
				/>
			</div>
		</div>
	);
}
