import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Beers from "./pages/Beers";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/beers" element={<Beers />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
