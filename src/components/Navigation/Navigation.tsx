import { Link } from "react-router-dom";
import "./style.scss";

export default function Navigation() {
  return (
    <div className="block--container nav d-flex justify-content-between align-items-center">
      {" "}
      <h2>Logo</h2>
      <div className="block--links">
        <Link to={"/"}>Home</Link>
        <Link to={"/beers"}>Beers</Link>
      </div>
    </div>
  );
}
