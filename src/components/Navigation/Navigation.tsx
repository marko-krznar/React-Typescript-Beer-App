import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

import "./style.scss";

import beerLogo from "../../images/beer_app_logo.webp";

export default function Navigation() {
	const menu = useRef<HTMLDivElement>(null);

	let location = useLocation();

	return (
		<div
			className="block--container nav d-flex justify-content-between align-items-center"
			ref={menu}
		>
			<div className="block-logo">
				<img src={beerLogo} alt="beer-logo" />
			</div>
			<div className="block--links">
				<Link
					className={
						location.pathname === "/React-Typescript-Beer-App"
							? "block--link block--link-active"
							: "block--link"
					}
					to={"/React-Typescript-Beer-App"}
				>
					Home
				</Link>
				<Link
					className={
						location.pathname === "/React-Typescript-Beer-App/beers"
							? "block--link block--link-active"
							: "block--link"
					}
					to={"/React-Typescript-Beer-App/beers"}
				>
					Beers
				</Link>
			</div>
		</div>
	);
}
