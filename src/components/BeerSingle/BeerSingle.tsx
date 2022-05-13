import { Link } from "react-router-dom";
import "./style.scss";

export default function BeerSingle({ beer, handleFavourite }: any) {
  return (
    <div className="single-item">
      {/* <i className="bi bi-star" onClick={() => handleFavourite(beer)}></i> */}
      <span className="block--abv">{beer.abv}%</span>
      <div className="img--frame">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <h3>{beer.name}</h3>
      <p>{beer.description.split(/\s+/).slice(0, 16).join(" ") + "..."}</p>
      <Link className="btn" to={`/React-Typescript-Beer-App/beer/${beer.id}`}>
        See more
      </Link>
    </div>
  );
}
