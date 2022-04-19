import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ISingleBeer } from "../models/ISingleBeer";
import { BeersService } from "../services/BeersService";

interface URLParams {
  id: string;
}

interface IState {
  singleBeer: ISingleBeer;
  errorMsg: string;
}

function SingleBeer() {
  const { id } = useParams<URLParams | any>();

  const [beer, setBeer] = useState<IState>({
    singleBeer: {} as ISingleBeer,
    errorMsg: "",
  });

  useEffect(() => {
    if (id) {
      BeersService.getSingleBeer(id)
        .then((res) => {
          setBeer({
            ...beer,
            singleBeer: res.data,
          });
        })
        .catch((err) => {
          setBeer({
            ...beer,
            errorMsg: err.message,
          });
        });
    }
  }, [id]);

  let { singleBeer } = beer;

  return (
    <div>
      {singleBeer != null && Array.isArray(singleBeer) && (
        <>
          <img
            style={{ maxWidth: "100px" }}
            src={singleBeer[0].image_url}
            alt={singleBeer[0].name}
          />
          <h2>{singleBeer[0].name}</h2>
          <p>{singleBeer[0].tagline}</p>
          <p>{singleBeer[0].description}</p>
        </>
      )}
      <Link to={"/beers"}>Back to Beers</Link>
    </div>
  );
}

export default SingleBeer;
