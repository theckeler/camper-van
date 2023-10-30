"use client";
import { Fragment } from "react";
import { OutputInputs } from "./OutputInputs";
import { H2 } from "../H2";
import { OutputMain } from "./";

export function OutputSub({ products, updateTotal }) {
	return (
		<ul className="grid grid-cols-[1fr] lg:grid-cols-[200px_1fr]">
			{Object.keys(products).map((title, i) => {
				return products[title].product ? (
					<OutputMain
						title={title}
						titleBase={products[title]}
						key={i}
						updateTotal={updateTotal}
					/>
				) : (
					<Fragment key={i}>
						<li>
							<H2 title={title} />
						</li>
						<li>
							<OutputInputs
								inputs={products[title]}
								subtitle={title}
								updateTotal={updateTotal}
							/>
						</li>
					</Fragment>
				);
			})}
		</ul>
	);
}
