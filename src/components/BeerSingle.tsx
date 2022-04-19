import { Link } from "react-router-dom";

export default function BeerSingle({ beer }: any) {
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
      <Link to={`/beer/${beer.id}`}>See more</Link>
    </div>
  );
}
