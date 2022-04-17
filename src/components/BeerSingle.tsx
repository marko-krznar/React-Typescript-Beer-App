export default function BeerSingle({ beer }: any) {
  return (
    <div className="single-item">
      <div className="img--frame">
        <img
          style={{ maxWidth: "120px" }}
          src={beer.image_url}
          alt={beer.name}
        />
      </div>
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
    </div>
  );
}
