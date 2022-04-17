import axios from "axios";
import { useEffect, useState } from "react";
import { Ibeer } from "./models/Ibeer";

interface IState {
  loading: boolean;
  beers: Ibeer[];
  errorMsg: string;
}

function App() {
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
    axios
      .get("https://api.punkapi.com/v2/beers")
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

  return (
    <div>
      <h2>Beer List</h2>
      {loading === true
        ? "Loading"
        : beers.length > 0 &&
          beers.map((beer) => {
            return (
              <div key={beer.id}>
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
          })}
      {beers.length === 0 && errorMsg}
    </div>
  );
}

export default App;
