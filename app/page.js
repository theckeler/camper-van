"use client";
import { Fragment, useState, useEffect } from "react";
// import DataVan from "@/data/van";

const DataVan = {
	// category: {
	// 	brand: "BRAND",
	// 	product: `PRODUCT`,
	// 	href: "URL",
	// 	price: 0,
	// },

	exterior: {
		rack: {
			brand: "FVCO",
			product: '144" Standard Sprinter Roof Rack',
			href: "https://flatlinevanco.com/collections/sprinter/products/standard-roof-rack-sprinter-vans",
			price: 1995,
		},
		ladder: {
			brand: "FVCO",
			product: "Van Side Ladder - Wheel Wrap",
			href: "https://flatlinevanco.com/products/sprinter-side-ladder?variant=39758324728003",
			price: 745,
		},
		awning: {
			brand: "Fiamma",
			product: "F80S Awning",
			href: "https://flatlinevanco.com/collections/sprinter-exterior/products/fiamma-f80-awnings?variant=30332501196851",
			price: 1695,
		},
		step: {
			brand: "FVCO",
			product: "Van Step",
			href: "https://flatlinevanco.com/products/sprinter-side-ladder?variant=39758324728003",
			price: 195,
		},
		tireCarrier: {
			brand: "Aluminess",
			product: "Tire Carrier Box",
			href: "https://www.aluminess.com/sprinter-tire-carrier-box/",
			price: 995,
		},
	},
	interior: {
		kit: {
			brand: "Adventure Wagon",
			product: "Modular Interior System",
			href: "https://adventurewagon.com/pages/interiorsystem",
			price: null,
		},
		headlinerShelf: {
			brand: "Radius Outfitters",
			product: "Gear Loft",
			href: "https://radiusoutfitters.com/products/sprinter-headliner-overhead-shelf",
			price: 649,
		},
		refrigeration: {
			brand: "Dometic",
			product: "CFX3 75 Dual Zone Powered Cooler",
			href: "https://www.rei.com/product/172595/dometic-cfx3-75-dual-zone-powered-cooler",
			price: 1250,
		},
		heating: {
			brand: "Espar",
			product: "Espar S2 D2l",
			href: "https://www.heatso.com/espar-airtronic-d2l-diesel-heater-kit",
			price: 1200,
		},
		electricalSystem: {
			brand: "EcoFlow",
			product: "DELTA Pro Portable Power Station",
			href: "https://www.rei.com/product/206379/ecoflow-delta-pro-portable-power-station",
			price: 2999,
		},
		ventilation: {
			brand: "Maxxair",
			product: "Deluxe 00-07500K",
			href: "https://flatlinevanco.com/products/sprinter-side-ladder?variant=39758324728003",
			price: 329,
		},
		flooring: {
			complete: {
				brand: "Smartfloor",
				product: "Aluminum Floor Solution",
				href: "https://www.amfbrunsamerica.com/products/smartfloor/",
				price: 6365,
			},
			extension: {
				brand: "FVCO",
				product: "Step Extension",
				href: "https://flatlinevanco.com/products/the-extension",
				price: 295,
			},
			covering: {
				radio: [
					{
						brand: "2tec2",
						product: "vinyl woven flooring",
						href: "https://www.2tec2.com/woven-vinyl-floors",
						price: 1400,
					},
					{
						brand: "lonseal",
						product: "LONCOIN® II",
						href: "https://lonseal.com/products/product-details/line/LONCOINsupregsupII/",
						price: null,
					},
				],
			},
		},
		garage: {
			storage: {
				checkbox: [
					{
						brand: "Canyon Adventure Vans",
						product: "Doorganizer",
						href: "https://canyonadventurevans.com/product/van-door-organizer/",
						price: 70,
					},
				],
			},
			pullOutTray: {
				brand: "FVCO",
				product: "Adventure Van Pull Out Tray",
				href: "https://flatlinevanco.com/collections/sprinter/products/pull-out-tray",
				price: 895,
			},
			stove: {
				brand: "Partner Steel",
				product: "2 Burner Partner Stoves With Windscreens",
				href: "https://partnersteel.com/shop/ols/products/2-burner-partner-stoves-with-windscreens/v/2-BRN-PRT-STV-16-LFT-SD",
				price: 470,
			},
		},
		toilet: {
			brand: "Clean Waste",
			product: "GO Anywhere Portable Toilet",
			href: "https://cleanwaste.com/product/go-anywhere-portable-toilet/",
			price: 960,
		},
		technology: {
			solarPanel: {
				brand: "EcoFlow",
				product: "100W Rigid Solar Panel",
				href: "https://us.ecoflow.com/products/100w-rigid-solar-panel?variant=40133459640393",
				price: 99,
			},
			mobileBooster: {
				brand: "weBoost",
				product: "Drive Reach RV Cell Phone Signal Booster Kit",
				href: "https://www.weboost.com/products/drive-reach-rv-470154",
				price: 499.99,
			},
			starlink: {
				brand: "Starlink",
				product: "Starlink Satellite Internet Dish",
				href: "https://www.starlink.com/",
				price: 499,
			},
			hornKit: {
				brand: "Agile Offroad",
				product: "Agile Horn Kit Sprinter 2019+",
				href: "https://agileoffroad.com/product/agile-horn-kit-sprinter-2019/",
				price: 80,
			},
		},
	},
};

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
		<ul className="grid grid-cols-[1fr_48px_100px] items-center gap-1 p-1">
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

	const ulCSS =
		"grid grid-cols-[minmax(160px,_220px)_1fr] gap-4 border p-4 w-full";

	return (
		<main className="flex items-center flex-col p-10 max-w-screen-xl mx-auto 2xl:p-2 mb-8">
			<h1 className="text-2xl text-sky-800 mb-4 font-extrabold">
				144 Sprinter AWD Van:
			</h1>

			<h2 className="text-xl text-emerald-800 mb-2 font-bold">Exterior:</h2>
			<ul className={ulCSS}>
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

			<h2 className="text-xl text-emerald-800 my-4 font-bold">Exterior:</h2>
			<ul className={ulCSS}>
				{Object.keys(DataVan.interior).map((title, i) => {
					return (
						<OutputMain
							title={title}
							titleBase={DataVan.interior[title]}
							key={i}
							className="bg-orange-100 rounded"
						/>
					);
				})}
			</ul>
		</main>
	);
}
