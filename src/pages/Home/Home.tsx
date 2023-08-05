import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
	return (
		<div className="block--container pg-home d-flex align-items-center">
			<div className="block--info">
				<h1 className="headline">the Beer Project</h1>
				<p className="text-description">
					Welcome to the Beer Project! This practice endeavor brings
					you a host of exciting features designed to enhance your
					beer exploration. Let's delve into the key functionalities
					we've incorporated: beer list, single beer, filter by beer
					name or Alcohol content (20%) and sort by % Alcohol or by
					Name.
				</p>
				<Link
					to={"/React-Typescript-Beer-App/beers"}
					className="btn btn--bcg-middle"
				>
					See all beers
				</Link>
			</div>
		</div>
	);
}

export default Home;
