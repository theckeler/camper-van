"use client";
import { useState, useEffect } from "react";
import { OutputMain } from "./componets/Output/";

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
		windows: {
			driverSideForward: {
				brand: "AMA",
				product: "Screened Half-Slider Window",
				href: "https://vanlandstore.com/products/van-windows-direct-drivers-side-screened-half-slider-window-2007-2020",
				price: 700,
				note: "Driver Side Forward",
			},
			sliderSideForward: {
				brand: "AMA",
				product: "Screened Half-Slider Window",
				href: "https://vanlandstore.com/products/van-windows-direct-drivers-side-screened-half-slider-window-2007-2020",
				price: 700,
				note: "Slider Side Forward",
			},
			rearDoors: {
				brand: "AMA",
				product: "Solid Glass Window",
				href: "https://vanlandstore.com/products/van-windows-direct-drivers-side-screened-half-slider-window-2007-2020",
				price: 250,
				multiplier: 2,
			},
		},
	},
	interior: {
		buildKit: {
			conversionKit: {
				brand: "Adventure Wagon",
				product: "Base Price",
				href: "https://adventurewagon.com/pages/interiorsystem",
				price: 16000,
				note: `
				<p><strong>Upholstery:</strong> Grey Heather</p>
				<p><strong>Lighting:</strong> Installed (standard)</p>
				
				<p><strong>Panels:</strong></p>
					<ul>
						<li>Center Ceiling Panel:Black Hex</li>
						<li>Upper wall/outer ceiling panel:Upholstered panels</li>
						<li>Mid Wall Panel - Rear:Upholstered panel</li>
						<li>Window Behind Driver:I do not have a window behind driver</li>
						<li>Mid Wall Panel - Front:Upholstered Panel</li>
						<li>Low Wall Panel:Black hex laminate</li>
						<li>Upper door trim:Black Hex Laminate</li>
						<li>Lower Door Trim:Black Hex Laminate</li>
						<li>Cab Headliner:No headliner fabric</li>
					</ul>

					<p><strong>Storage Systems</strong></p>
					<ul>
						<li>Overhead Storage:No Overhead Storage</li>
						<li>Headliner Storage:I don't need headliner storage</li>
						<li>Rear Slide Out Tray:No Tray Needed</li>
						<li>Cargo Control:No Strap Kit</li>
						<li>Roof Racks:No roof rack</li>
					</ul>

					<p><strong>Climate Control</strong></p>
					<p>3M Thinsulate Insulation:Wall and ceiling insulation (standard)</p>

					<p><strong>Sound Dampening</strong></p>
					<p>Hushmat Sound Dampening:Include (standard)</p>

					<p><strong>Electrical</strong></p>
					<p>Outlet Placement:Standard</p>
				`,
			},
			lTrack: {
				brand: "Adventure Wagon",
				product: "Black anodized",
				price: 500,
				note: "",
			},
			frontFan: {
				brand: "Maxxair",
				product: "Deluxe 00-07500K",
				href: "https://flatlinevanco.com/products/sprinter-side-ladder?variant=39758324728003",
				price: 0,
			},
			rearFan: {
				brand: "Maxxair",
				product: "Deluxe 00-07500K",
				price: 350,
			},
			bunkWindow: {
				brand: "AMA",
				product: "Driver Side Slider Install",
				price: 600,
				note: "Window trim fabric color: Grey Heather",
			},
			factroyInstallation: {
				brand: "Adventure Wagon",
				product: "Kit Install",
				price: 6325,
				note: "",
			},
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
						group: "covering",
					},
					{
						brand: "lonseal",
						product: "LONCOIN® II",
						href: "https://lonseal.com/products/product-details/line/LONCOINsupregsupII/",
						price: null,
						group: "covering",
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
				price: 500,
			},
			starlink: {
				brand: "Starlink",
				product: "Starlink Satellite Internet Dish",
				href: "https://www.starlink.com/",
				price: 500,
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
