import { Link } from "react-router-dom";
import { useRef } from "react";
import "./style.scss";

import beerLogo from "../../images/beer_app_logo.webp";

export default function Navigation() {
	const menu = useRef<HTMLDivElement>(null);

	return (
		<div
			className="block--container nav d-flex justify-content-between align-items-center m--flex-direction-column"
			ref={menu}
		>
			<div className="block-logo">
				<img src={beerLogo} alt="beer-logo" />
			</div>
			<div className="block--links">
				<Link to={"/React-Typescript-Beer-App"}>Home</Link>
				<Link to={"/React-Typescript-Beer-App/beers"}>Beers</Link>
			</div>
		</div>
	);
}
