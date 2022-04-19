import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  // console.log(singleBeer[0]?.name);

  return (
    <div>
      <h2>test</h2>
      {Object.keys(singleBeer).length > 0 && (
        <>
          <h2>{singleBeer.name}</h2>
        </>
      )}
    </div>
  );
}

export default SingleBeer;
