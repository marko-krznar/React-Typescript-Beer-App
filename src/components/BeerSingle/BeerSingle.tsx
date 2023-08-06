import { Link } from "react-router-dom";
import "./style.scss";

export default function BeerSingle({ beer }: any) {
	return (
		<div className="single-item">
			<span className="block--abv">{beer.abv}%</span>
			<div className="img--frame">
				<img src={beer.image_url} alt={beer.name} />
			</div>
			<h2 className="headline">{beer.name}</h2>
			<p>
				{beer.description.split(/\s+/).slice(0, 16).join(" ") + "..."}
			</p>
			<div className="button-wrapper">
				<Link
					className="btn"
					to={`/React-Typescript-Beer-App/beer/${beer.id}`}
				>
					See more
				</Link>
			</div>
		</div>
	);
}
