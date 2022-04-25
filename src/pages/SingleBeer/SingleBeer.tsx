import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ISingleBeer } from "../../models/ISingleBeer";
import { BeersService } from "../../services/BeersService";
import "./style.scss";

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
    <div className="block--container pg--single-product">
      {singleBeer != null && Array.isArray(singleBeer) && (
        <>
          <div className="block--headline">
            <Link className="btn btn--back" to={"/beers"}>
              Back to Beers
            </Link>
            <h2>
              {singleBeer[0].name}
              <span>{singleBeer[0].tagline}</span>
            </h2>
            <p>{singleBeer[0].description}</p>
          </div>
          <div className="block--image-frame">
            <img src={singleBeer[0].image_url} alt={singleBeer[0].name} />
          </div>
          <div className="block--specs d-flex">
            <div>
              <img src="" alt="" />
              <h3>Ingredients</h3>
              <ul>
                <li>{singleBeer[0].ingredients.yeast}</li>
                {singleBeer[0].ingredients.malt.map(
                  (malt: any, index: number) => {
                    return <li key={index}>{malt.name}</li>;
                  }
                )}
                {singleBeer[0].ingredients.hops.map(
                  (hops: any, index: number) => {
                    return <li key={index}>{hops.name}</li>;
                  }
                )}
              </ul>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Food pairing</h3>
              <ul>
                {singleBeer[0].food_pairing.map(
                  (food: string, index: number) => {
                    return <li key={index}>{food}</li>;
                  }
                )}
              </ul>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Brewers tips</h3>
              <p>{singleBeer[0].brewers_tips}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleBeer;
