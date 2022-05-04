import { useEffect, useState } from "react";
import BeerSingle from "../../components/BeerSingle/BeerSingle";
import { Ibeer } from "../../models/Ibeer";
import { BeersService } from "../../services/BeersService";
import "./style.scss";

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
  const [alcoholContent, setAlcoholContent] = useState("100");
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

  // Sad mi radi kao zajednički filteri i ispunjava se s oba, meni treba da se ispunjava jedan uvjet, a zatim drugi
  const filterBeer = beers.filter((beer) => {
    if (
      beer.name.toLowerCase().includes(term) &&
      beer.abv <= parseFloat(alcoholContent)
    ) {
      return beer;
    }
  });

  return (
    <div className="block--container pg-beers">
      <h2>Legendary Beer Brewerly</h2>
      <div className="block--filter-sort d-flex">
        <div className="block--filter-name">
          <h3>Filter by name</h3>
          <input
            required
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="block--filter-by-alcohol">
          <h3>Alcohol content ({alcoholContent}%)</h3>
          <input
            type="range"
            value={alcoholContent}
            onChange={(e) => setAlcoholContent(e.target.value)}
            id="vol"
            name="vol"
            min="0"
            max="100"
          />
          <div className="block--percentage d-flex justify-content-between">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap block--prod-list">
        {loading === true && "Loading"}
        {filterBeer.length === 0 && loading === false
          ? `There are no beers with filters you provided`
          : filterBeer.map((beer) => {
              return <BeerSingle key={beer.id} beer={beer} />;
            })}
        {beers.length === 0 && errorMsg}
      </div>
    </div>
  );
}

export default Beers;
