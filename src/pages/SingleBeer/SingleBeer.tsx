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
          <div className="block--beer-info d-flex justify-content-center align-items-center">
            <div className="block--image-frame">
              <img src={singleBeer[0].image_url} alt={singleBeer[0].name} />
            </div>
            <div className="block--info">
              <div className="block--headline">
                <h2>{singleBeer[0].name}</h2>
                <span className="txt-tag">#{singleBeer[0].tagline}</span>
                <p>{singleBeer[0].description}</p>
              </div>
              <div className="block--specs d-flex">
                <div>
                  <img src="" alt="" />
                  <h3>
                    <i className="bi bi-hand-thumbs-up-fill"></i> Food pairing
                  </h3>
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
                  <h3>
                    <i className="bi bi-hand-index-fill"></i> Brewers tips
                  </h3>
                  <p>{singleBeer[0].brewers_tips}</p>
                </div>
              </div>
              <div className="block--bcg-btn">
                <Link className="tag--back" to={"/beers"}>
                  <i className="bi bi-chevron-left"></i>
                  <span>Back to Beers</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleBeer;
