import { Link } from "react-router-dom";
import "./style.scss";

export interface singleBeerProps {
	id: number;
	name: string;
	description: string;
	image_url: string;
	abv: number;
}

export default function BeerSingle(props: singleBeerProps) {
	const { id, name, description, image_url, abv } = props;

	return (
		<div className="single-item">
			<span className="block--abv">{abv}%</span>
			<div className="img--frame">
				<img src={image_url} alt={name} />
			</div>
			<h2 className="headline">{name}</h2>
			<p>{description.split(/\s+/).slice(0, 16).join(" ") + "..."}</p>
			<div className="button-wrapper">
				<Link
					className="btn"
					to={`/React-Typescript-Beer-App/beer/${id}`}
				>
					See more
				</Link>
			</div>
		</div>
	);
}
