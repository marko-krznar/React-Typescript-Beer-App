import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Beers from "./pages/Beers";
import Home from "./pages/Home";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/beers" element={<Beers />} />
        <Route path="/beer/:id" element={<SingleBeer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
