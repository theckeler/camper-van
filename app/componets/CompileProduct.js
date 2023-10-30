"use client";
import { useState, useEffect } from "react";
import { OutputPrice } from "./Output/OutputPrice";

export function CompileProduct({ titleBase, updateTotal }) {
	const id = titleBase.product.replace(/\s/g, "-").toLowerCase();

	// useEffect(() => {
	// 	const checked = document.querySelector(`#${id}`);
	// 	console.log(id);
	// }, [id]);

	return (
		<div className="p-1 mb-1 relative product-list">
			<label
				className={`absolute top-0 left-0 w-full h-full z-10 border hover:border-cyan-500 cursor-pointer`}
				htmlFor={id}
			/>
			<ul className="grid grid-cols-[minmax(0,_1fr)_48px_minmax(60px,_80px)_minmax(60px,_80px)] items-center gap-1 p-1 w-full">
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
						updateTotal={updateTotal}
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
