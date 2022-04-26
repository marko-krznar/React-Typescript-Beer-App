import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../images/beer-logo.webp";

export default function Navigation() {
  return (
    <div className="block--container nav d-flex justify-content-between align-items-center">
      {" "}
      <div className="block-logo">
        <img src={logo} alt="beer-logo" />
      </div>
      <div className="block--links">
        <Link to={"/"}>Home</Link>
        <Link to={"/beers"}>Beers</Link>
      </div>
    </div>
  );
}
