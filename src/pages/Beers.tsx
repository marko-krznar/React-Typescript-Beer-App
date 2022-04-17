import { useEffect, useState } from "react";
import BeerSingle from "../components/BeerSingle";
import { Ibeer } from "../models/Ibeer";
import { BeersService } from "../services/BeersService";

interface IState {
  loading: boolean;
  beers: Ibeer[];
  errorMsg: string;
}

function Beers() {
  const [state, setState] = useState<IState>({
    loading: false,
    beers: [] as Ibeer[],
    errorMsg: "",
  });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    BeersService.getAllBeers()
      .then((res) => {
        setState({
          ...state,
          loading: false,
          beers: res.data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        });
      });
  }, []);

  const { loading, beers, errorMsg } = state;
  return <h2>Beer List</h2>;
  {
    loading === true
      ? "Loading"
      : beers.length > 0 &&
        beers.map((beer) => {
          return <BeerSingle key={beer.id} beer={beer} />;
        });
  }
  {
    beers.length === 0 && errorMsg;
  }
}

export default Beers;
