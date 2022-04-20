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
  const [term, setTerm] = useState("");

  const { loading, beers, errorMsg } = state;

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

  const searchedBeer = beers.filter((beer) => {
    if (beer.name.toLowerCase().includes(term)) {
      return beer;
    }
  });

  return (
    <>
      <h2>Beer List</h2>
      <h3>Filter by name</h3>
      <input
        required
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {loading === true && "Loading"}
      {searchedBeer.length === 0 && loading === false
        ? `Beer ${term} can't be find`
        : searchedBeer.map((beer) => {
            return <BeerSingle key={beer.id} beer={beer} />;
          })}
      {beers.length === 0 && errorMsg}
    </>
  );
}

export default Beers;
