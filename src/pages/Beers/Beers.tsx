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
  const [favourites, setFavourites] = useState(false);
  const [favouritebeers, setFavouritebeers] = useState<any[]>([]);
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

  const filterBeer = beers.filter((beer) => {
    if (favourites === true) {
      return;
    }
    if (
      beer.name.toLowerCase().includes(term) &&
      beer.abv <= parseFloat(alcoholContent)
    ) {
      return beer;
    }
  });

  const handleFavourite = (beer: any) => {
    const existingBeer = favouritebeers.find((x) => x.id === beer.id);
    if (existingBeer) {
      setFavouritebeers(favouritebeers.filter((x) => x.id !== beer.id));
    } else {
      setFavouritebeers([...favouritebeers, beer]);
    }
  };

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
        <div className="block--favourites">
          <h3>Show only favourites</h3>
          <input
            type="checkbox"
            id="favourites"
            name="favourites"
            value="favourites"
            onChange={() => setFavourites(!favourites)}
          ></input>
        </div>
      </div>
      <div className="d-flex flex-wrap block--prod-list block--favourites">
        {favouritebeers.length >= 1 && favourites === true
          ? favouritebeers.map((beer) => {
              return (
                <BeerSingle
                  key={beer.id}
                  beer={beer}
                  handleFavourite={handleFavourite}
                />
              );
            })
          : ""}
      </div>
      <div
        className={
          favourites === true
            ? "d-flex flex-wrap block--prod-list block--hide"
            : "d-flex flex-wrap block--prod-list"
        }
      >
        {loading === true && "Loading"}
        {filterBeer.length === 0 && loading === false
          ? `There are no beers with filters you provided`
          : filterBeer.map((beer) => {
              return (
                <BeerSingle
                  key={beer.id}
                  beer={beer}
                  handleFavourite={handleFavourite}
                />
              );
            })}

        {beers.length === 0 && errorMsg}
      </div>
    </div>
  );
}

export default Beers;
