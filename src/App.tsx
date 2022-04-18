import { Link, Route, Routes } from "react-router-dom";
import Beers from "./pages/Beers";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/beers" element={<Beers />} />
      </Routes>
      <Link to={"/beers"}>Beers</Link>
      <Home />
    </div>
  );
}

export default App;
