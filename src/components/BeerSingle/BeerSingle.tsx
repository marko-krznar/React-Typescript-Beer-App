import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface IState {
  favouriteBeers: [];
}

export default function BeerSingle({ beer }: any) {
  const [state, setState] = useState<IState>({
    favouriteBeers: [],
  });
  const { favouriteBeers } = state;
  const handleFavourites = (e: any, beer: any) => {
    setState({
      ...favouriteBeers,
      favouriteBeers: beer,
    });
  };

  return (
    <div className="single-item">
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
