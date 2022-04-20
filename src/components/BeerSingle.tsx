import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div
      className="single-item"
      style={{ marginBottom: "2rem", maxWidth: "30%" }}
    >
      <div className="img--frame">
        <img
          style={{ maxWidth: "120px" }}
          src={beer.image_url}
          alt={beer.name}
        />
      </div>
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
      <button onClick={(e) => handleFavourites(e, beer)}>
        Add to favourites
      </button>
      <Link to={`/beer/${beer.id}`}>See more</Link>
    </div>
  );
}
