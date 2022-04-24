import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="block--container">
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
  );
}

export default Home;
