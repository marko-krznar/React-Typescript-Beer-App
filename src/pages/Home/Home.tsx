import React from "react";
import { Link } from "react-router-dom";
import beerDay from "../../images/beer-day.webp";
import "./style.scss";

function Home() {
  return (
    <div className="block--container pg-home d-flex align-items-center">
      <div className="block--info">
        <h2>Beer App</h2>
        <p>Features</p>
        <ul>
          <li>Display beer list</li>
          <li>Display single beer</li>
        </ul>
        <Link to={"beers"} className="btn btn--bcg-middle">
          See beers
        </Link>
      </div>
      <div className="block--image">
        <img src={beerDay} alt="beer-day" />
      </div>
    </div>
  );
}

export default Home;
