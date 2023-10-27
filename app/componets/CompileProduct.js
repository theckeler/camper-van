"use client";
import { OutputPrice } from "./Output/OutputPrice";

export function CompileProduct({ titleBase, updateTotal, checked }) {
	return (
		<div className="p-1 mb-1 relative">
			<label
				className={`absolute top-0 left-0 w-full h-full z-10 border hover:border-cyan-500 cursor-pointer`}
				htmlFor={titleBase.product.replace(/\s/g, "-").toLowerCase()}
			/>
			<ul className="grid grid-cols-[1fr_48px_100px] items-center gap-1 p-1">
				<li>
					<span className="p-3 rounded w-full block">
						{titleBase.brand} {titleBase.product}{" "}
						{titleBase.multiplier > 0 && `(X${titleBase.multiplier})`}
					</span>
				</li>
				<li>
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
				<li className="text-right">
					<OutputPrice
						price={titleBase.price}
						multiplier={titleBase.multiplier}
						updateTotal={updateTotal}
					/>
				</li>
				{titleBase.note && (
					<li>
						<div
							className="p-3"
							dangerouslySetInnerHTML={{ __html: titleBase.note }}
						/>
					</li>
				)}
			</ul>
		</div>
	);
}
